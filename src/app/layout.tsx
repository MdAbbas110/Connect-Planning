import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-red-600">
        {children}
        <h1 className="text-red-700 red">There</h1>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
