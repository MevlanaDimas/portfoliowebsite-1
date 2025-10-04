import AppLogoIconBlack from './app-logo-icon-black';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-neutral-200 text-sidebar-primary-foreground">
                <AppLogoIconBlack className="size-8 fill-current" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">Portofolio</span>
            </div>
        </>
    );
}
