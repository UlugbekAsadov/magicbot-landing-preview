"use client";
import { useLocaleContext } from "@/context/locale.context";
import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { translate } = useLocaleContext();
  const router = useRouter();
  return (
    <div className="w-full p-4  bg-[#111111] min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl text-white   max-w-3xl text-center w-full mx-auto">
        {translate("contact_page.success.title")}
      </h2>
      <Button
        onClick={() => router.push("/")}
        className="bg-blue-600 text-white w-fit px-4 h-10 mt-4 rounded-md"
      >
        {translate("common.back_to_home")}
      </Button>
    </div>
  );
}
