import {
  createServerClient,
  type CookieOptions,
  serialize,
} from "@supabase/ssr";
import { type NextApiRequest, type NextApiResponse } from "next";

export default function createClient(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return Object.keys(req.cookies).map((name) => ({
            name,
            value: req.cookies[name] || "",
          }));
        },
        setAll(cookiesToSet) {
          res.setHeader(
            "Set-Cookie",
            cookiesToSet.map(({ name, value, options }) =>
              serialize(name, value, options),
            ),
          );
        },
      },
    },
  );

  return supabase;
}
