import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="flex justify-center">
      <SignIn appearance={dark} />
    </div>
  );
}
