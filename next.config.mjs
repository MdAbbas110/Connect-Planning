import { Client } from "@prismicio/client";

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const clientRepo = new Client();
  const repository = await clientRepo.getRepository();
  const locales = repository.languages.map((lang) => lang.id);

  return {
    i18n: {
      locales,
      defaultLocale: locales[0],
    },
  };
};

export default nextConfig;
