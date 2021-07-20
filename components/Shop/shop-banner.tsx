import Image from 'next/image';
import { ReactPropTypes } from 'react';

interface ShopBannerProps {
    banner: any,
    actions?: any
}

export const ShopBanner = ({ banner, actions }: ShopBannerProps) => {
    return (
        <div className="page-banner">
            <figure className="page-banner__image">
                <Image className="test" src={banner} alt="" />
            </figure>
            <div className="page-banner__details">
                <div className="page-banner__details__title">
                    <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                </div>
            </div>
            {actions && (
                <div className="container page-banner__actions grid three">
                    <button className="btn-outline-green btn-big">
                        Subscription
                    </button>
                    <button className="btn-outline-green btn-big">
                        Bulk vs Pods
                    </button>
                    <button className="btn-outline-green btn-big">
                        Get Free Shipping + $49.00
                    </button>
                </div>
            )}
        </div>
    )
}