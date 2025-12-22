import type { NextConfig } from "next";

const backendURL = process.env.NEXT_PUBLIC_BASE_URL as string;
const isDev = backendURL.startsWith("http://localhost");

const nextConfig: NextConfig = {
    images: {
        dangerouslyAllowLocalIP: isDev,
        remotePatterns: [
            {
                protocol: isDev ? "http" : "https",
                hostname: isDev ? "localhost" : "",
                port: isDev ? "1337" : "",
                pathname: "/uploads/**"
            },
        ],
    },
};

export default nextConfig;
