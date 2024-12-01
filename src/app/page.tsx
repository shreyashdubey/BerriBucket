import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";
import { Logo } from "@/components/icons/logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <Construction className="h-24 w-24 mb-8 animate-bounce" />
      <h1 className="text-4xl font-bold mb-4">Website Under Construction</h1>
      <p className="text-xl text-muted-foreground mb-8">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <Button size="lg" className="mb-12">
        <a href="mailto:berribucket@gmail.com">Contact Us</a>
      </Button>
      
      <div className="w-full max-w-md">
        <Logo className="w-full h-auto text-foreground opacity-50" />
      </div>
    </div>
  );
} 