import { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '../ui/Box';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ScrollControl from '../components/scrollControl/ScrollControl';
import { useUser } from '../components/authentication/useUser';
import { fetchCart } from '../store/cartActions';
import {
    subscribeToUpdates as subscribe,
    unsubscribeFromUpdates as unsubscribe,
} from '../services/channels';

function AppLayout() {
    const dispatch = useDispatch();
    const { isLoadingUser, isFetching, isAuthenticated, user } = useUser();
    const userId = user?.sub;

    const fetchData = useCallback(() => {
        dispatch(fetchCart({ isAuthenticated, userId }));
    }, [isAuthenticated, userId]);

    useEffect(() => {
        if (!isFetching && !isLoadingUser) fetchData();
    }, [isLoadingUser, isAuthenticated]);

    useEffect(() => {
        const channel = subscribe(fetchData);

        return () => unsubscribe(channel);
    }, []);

    return (
        <Box styles="grid min-h-screen w-screen min-w-[240px] grid-rows-[auto_1fr_auto] bg-studio-100">
            <Header />

            <ScrollControl />
            <Outlet />

            <Footer />
        </Box>
    );
}

export default AppLayout;
