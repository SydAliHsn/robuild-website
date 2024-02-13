'use client';

import { useState } from "react";
import { FormEventHandler } from "react";
import { UserAuth } from "../../app/context/AuthContext";
import Spinner from "../Common/Spinner";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const Form = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { emailRegister } = UserAuth();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit: FormEventHandler = async (e) => {
        try {
            e.preventDefault();
            setError('');

            if (!email || !password) return;

            setLoading(true);
            const user = await emailRegister(email, password, name);

            toast.success('Account created successfully!');

            const redirect = searchParams.get('redirect') || '/';

            router.push(redirect);
        } catch (err) {
            if (err.code == 'auth/email-already-in-use')
                return setError("An account with this email already exits! Try logging in instead.");
            setError("Something went wrong! Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return <form onSubmit={handleSubmit}>

        <div className="mb-8">

            <div className="mb-8">
                <label
                    htmlFor="name"
                    className="mb-3 block text-sm text-dark dark:text-white"
                >
                    {" "}
                    Your Name{" "}
                </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-secondary dark:focus:shadow-none"
                />
            </div>

            <label
                htmlFor="email"
                className="mb-3 block text-sm text-dark dark:text-white"
            >
                Your Email
            </label>
            <input
                required
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-secondary dark:focus:shadow-none"
            />
        </div>
        <div className="mb-8">
            <label
                htmlFor="password"
                className="mb-3 block text-sm text-dark dark:text-white"
            >
                Set Password
            </label>
            <input
                required
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Set your Password"
                className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-secondary dark:focus:shadow-none"
            />
        </div>
        {/* <div className="mb-8 flex flex-col justify-between sm:flex-row sm:items-center">
            <div className="mb-4 sm:mb-0">
                <label
                    htmlFor="checkboxLabel"
                    className="flex cursor-pointer select-none items-center text-sm font-medium text-body-color"
                >
                    <div className="relative">
                        <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                            checked={persistUser}
                            onChange={e => setPersistUser(e.target.checked)}
                        />
                        <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                            <span className="opacity-0">
                                <svg
                                    width="11"
                                    height="8"
                                    viewBox="0 0 11 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                        fill="#3056D3"
                                        stroke="#3056D3"
                                        strokeWidth="0.4"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    Keep me signed in
                </label>
            </div>
        </div> */}

        {error ? <div className="mb-5 text-sm py-2 text-red-500 font-semibold">{error}</div> : null}

        <button disabled={loading}
            className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 mb-6 gap-3 hover:bg-secondary hover:text-primary disabled:opacity-40">
            {loading ? <Spinner className="w-6 h-6" /> : ''}
            Register
        </button>

    </form >
};

export default Form;