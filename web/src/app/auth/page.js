"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";


export function SignIn() {
  const [login, setIsLogin] = useState(true)
  return (
    <section className="p-8 flex gap-4 absolute w-screen h-screen top-0 left-0 z-50 bg-white">
      {!login && <div className="w-2/5 h-full hidden lg:block">
        <img
          src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>}
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">{login?'Sign In':'Join us'}</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to {login?'sign in':'register'}.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Link href={'/'}>
          <Button className="mt-6" fullWidth>
          {login?'Sign In':'Register'}
          </Button>
          </Link>


          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4 flex items-center justify-center cursor-pointer">
           {login?'Not registered?':'Already registered?'}
            <div onClick={() => setIsLogin(prev => !prev)} className="text-gray-900 ml-1">{login?'Register':'Sign In'}</div>
          </Typography>
        </form>

      </div>
      {login && <div className="w-2/5 h-full hidden lg:block">
        <img
          src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>}

    </section>
  );
}

export default SignIn;