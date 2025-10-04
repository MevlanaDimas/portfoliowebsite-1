<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class EmailMessage extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The name of the person sending the message.
     *
     * @var string
     */
    public $name;

    /**
     * The email of the person sending the message.
     *
     * @var string
     */
    public $email;

    /**
     * The message content.
     *
     * @var string
     */
    public $msg;

    /**
     * Create a new message instance.
     */
    public function __construct(string $name, string $email, string $msg)
    {
        $this->name = $name;
        $this->email = $email;
        $this->msg = $msg;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            replyTo: [
                new Address($this->email, $this->name),
            ],
            subject: 'New Message from Portfolio Contact Form from ' . $this->name,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [
            \Illuminate\Mail\Mailables\Attachment::fromPath(public_path('output-onlinepngtools.png'))->as('logo.png', [
                'mime' => 'image/png',
                'Content-ID' => '<logo.png>',
            ]),
        ];
    }
}
