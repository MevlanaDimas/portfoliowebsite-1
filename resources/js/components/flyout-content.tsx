import { login, register } from "@/routes"
import { Link } from "@inertiajs/react"

export const FlyoutContent = () => {
    return (
        <div className="mt-2 py-0 px-3 flex flex-col gap-5 items-center justify-center">
            <Link
                href={login()}
                className="leading-normal inline-block text-center py-1.5 w-full px-3 rounded-sm bg-[#697565] text-white hover:bg-[#3C3D37]"
                >
                Log in
            </Link>
            <Link
                href={register()}
                className="leading-normal inline-block text-center py-1.5 w-full px-3 rounded-sm bg-[#697565] text-white hover:bg-[#3C3D37]"
                >
                Register
            </Link>
        </div>
    )
}