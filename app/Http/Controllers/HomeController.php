<?php

namespace App\Http\Controllers;

use App\Http\Resources\AboutResource;
use App\Http\Resources\ProjectResource;
use App\Http\Requests\EmailMessage;
use App\Mail\EmailMessage as ContactFormMailable;
use App\Mail\ContactFormReceipt;
use Inertia\Inertia;
use App\Models\About;
use App\Models\Project;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
     * Handle the incoming request for the home page.
     *
     * @return \Inertia\Response
     */
    public function viewHome()
    {
        // The cache key 'abouts' is misleading as it stores projects too.
        // Renaming to 'home.data' for clarity.
        $data = Cache::remember('home.data', now()->addMonth(1), function () {
            return [
                'abouts' => $this->getActiveAbouts(),
                'projects' => $this->getProjects(),
            ];
        });


        return Inertia::render('welcome', [
            'data' => $data,
        ]);
    }

    /**
     * Get the active "about" information.
     *
     * @return \Illuminate\Support\Collection
     */
    private function getActiveAbouts()
    {
        // While there should only be one active "about" entry, we return a
        // collection to maintain consistency with the original implementation
        // and avoid potential frontend issues. Using `first()` would be more
        // efficient if the frontend expects a single object.        
        return AboutResource::collection(About::where('activate', true)->get());
    }

    /**
     * Get all projects.
     *
     * @return \Illuminate\Support\Collection
     */
    private function getProjects()
    {
        return ProjectResource::collection(Project::latest()->get());
    }

    public function sendMessage(EmailMessage $request)
    {
        try {
            $validatedData = $request->validated();

            // Get the portfolio owner's email from the portfolio config file.
            $portfolioOwnerEmail = config('portfolio.owner.email');

            // 1. Send the message to the portfolio owner.
            Mail::to($portfolioOwnerEmail)->send(new ContactFormMailable(
                $validatedData['name'],
                $validatedData['email'],
                $validatedData['message']
            ));

            // 2. Send a confirmation receipt to the visitor.
            Mail::to($validatedData['email'])->send(new ContactFormReceipt($validatedData['name']));

            return redirect()->back()->with('success', 'Your message has been sent successfully.');
        } catch (\Symfony\Component\Mailer\Exception\TransportExceptionInterface $e) {
            // This catches specific mail transport errors
            Log::error('Message sending failed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'We couldn\'t send your message right now. Please try again later.');
        } catch (Exception $e) {
            // Catch any other unexpected errors
            Log::error('An unexpected error occurred in sendMessage: ' . $e->getMessage());
            return redirect()->back()->with('error', 'An unexpected error occurred. Please try again.');
        }
    }
}
