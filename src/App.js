import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import About from './components/about/About';
import AccessRoute from './components/authentication/AccessRoute';
import Account from './components/account/Account';
import AppLayout from './layouts/AppLayout';
import Cart from './components/cart/Cart';
import CheckoutForm from './components/checkoutForm/CheckoutForm';
import Collection from './components/collection/Collection';
import Contact from './components/contact/Contact';
import FAQs from './components/faqs/FAQs';
import MyAccount from './components/myAccount/MyAccount';
import OrderHistory from './components/orderHistory/OrderHistory';
import PasswordUpdateForm from './components/passwordUpdateForm/PasswordUpdateForm';
import ProtectedRoute from './components/authentication/ProtectedRoute';
import Product from './components/product/Product';
import Shop from './components/shop/Shop';
import SignIn from './components/signIn/SignIn';
import SignUpForm from './components/signUpForm/SignUpForm';
import Toaster from './ui/Toaster';
import UserUpdateForm from './components/userUpdateForm/UserUpdateForm';
import { ModalProvider } from './contexts/ModalContext';
import { ScrollControlProvider } from './contexts/ScrollControlContext';
import { getPathSegment } from './utils/helpers/location';
import { STRIPE_PUBLIC_KEY } from './utils/constants/config';
import { PATHS } from './utils/constants/routes';
import './index.css';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ModalProvider>
                <ScrollControlProvider>
                    <Router>
                        <Routes>
                            <Route
                                element={
                                    <Elements stripe={stripePromise}>
                                        <AppLayout />
                                    </Elements>
                                }
                            >
                                <Route
                                    index
                                    path={PATHS.HOME}
                                    element={<About />}
                                />

                                <Route path={PATHS.SHOP}>
                                    <Route index element={<Shop />} />
                                    <Route
                                        path={getPathSegment(PATHS.PRODUCT)}
                                        element={<Product />}
                                    />
                                </Route>

                                <Route
                                    path={PATHS.COLLECTION}
                                    element={<Collection />}
                                />

                                <Route
                                    path={PATHS.CONTACT}
                                    element={<Contact />}
                                />

                                <Route path={PATHS.CART} element={<Cart />} />
                                <Route path={PATHS.FAQ} element={<FAQs />} />

                                <Route element={<AccessRoute />}>
                                    <Route
                                        path={PATHS.LOGIN}
                                        element={<SignIn />}
                                    />
                                    <Route
                                        path={PATHS.SIGNUP}
                                        element={<SignUpForm />}
                                    />
                                </Route>

                                <Route element={<ProtectedRoute />}>
                                    <Route
                                        path={PATHS.CHECKOUT}
                                        element={<CheckoutForm />}
                                    />

                                    <Route
                                        path={PATHS.ACCOUNT}
                                        element={<Account />}
                                    >
                                        <Route index element={<MyAccount />} />
                                        <Route
                                            path={getPathSegment(PATHS.ORDERS)}
                                            element={<OrderHistory />}
                                        />
                                        <Route
                                            path={getPathSegment(
                                                PATHS.PROFILE_SETTINGS,
                                            )}
                                            element={<UserUpdateForm />}
                                        />
                                        <Route
                                            path={getPathSegment(
                                                PATHS.PASSWORD_SETTINGS,
                                            )}
                                            element={<PasswordUpdateForm />}
                                        />
                                    </Route>
                                </Route>
                            </Route>

                            <Route
                                path="*"
                                element={<Navigate replace to={PATHS.HOME} />}
                            />
                        </Routes>
                    </Router>
                </ScrollControlProvider>
            </ModalProvider>

            <Toaster />
        </QueryClientProvider>
    );
}

export default App;
