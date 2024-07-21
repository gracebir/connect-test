/** @format */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <main className='flex flex-col gap-10'>
            <div>
                <h1 className='text-center text-2xl font-bold'>Co:nnect</h1>
            </div>
            <div className='text-center flex flex-col'>
                <h1 className='text-[1.75em] font-medium hidden lg:block'>
                    Enter phone Number
                </h1>
                <h1 className='lg:hidden block text-2xl font-semibold'>
                    Add Phone Number
                </h1>
                <p className='text-base hidden lg:block'>
                    Enter Phone number to Verify Account
                </p>
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className='flex flex-col gap-8'
                action=''
            >
                <div className='flex flex-col gap-6 lg:gap-8'>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-auth-text-color text-sm'>
                            Country <span className='text-red-500'>*</span>
                        </label>
                        <Input
                            className='outline-none py-3.5 px-6 placeholder:text-auth-text-color placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0'
                            type='text'
                            placeholder='Select country'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='font-medium text-auth-text-color text-sm'>
                            Phone Number <span className='text-red-500'>*</span>
                        </label>
                        <Input
                            className='outline-none  py-3.5 px-6 placeholder:text-auth-text-color placeholder:text-sm focus-visible:ring-0 focus-visible:ring-offset-0'
                            type='text'
                            placeholder='Enter Phone Number '
                        />
                    </div>
                </div>

                <Button
                    onClick={() => {
                        router.push("/otp");
                    }}
                    className='max-w-[210px] w-full py-3 bg-auth-text-color mx-auto'
                >
                    Continue
                </Button>
            </form>
        </main>
    );
}
