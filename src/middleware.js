import {
  CheckMiddlewareOnDashboard,
  CheckMiddlewareForCustomer,
} from "./utility/MiddlewareHelper";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return CheckMiddlewareOnDashboard(req);
  }
  if (req.nextUrl.pathname.startsWith("/cart")) {
    return CheckMiddlewareForCustomer(req);
  } 
}
