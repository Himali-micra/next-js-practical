/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/login/loginstudent",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
  images: {
    domains: ["avatars.mds.yandex.net"],
  },
};

export default nextConfig;
