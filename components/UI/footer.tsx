import { FooterColumns } from '../Shop/footerColumn'

import Image from 'next/image'
export const Footer = ({ footerInfo }) => {
    console.log(footerInfo);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__columns">
                    <div className="column">
                        <figure>
                            <Image src={footerInfo?.logo} alt="Plant Milk Makers" />
                        </figure>
                        <p>
                            {footerInfo.excerpt}
                        </p>
                    </div>
                    <FooterColumns columnTitle={footerInfo?.linkColumnInfo?.columnTitle} columnItems={footerInfo?.linkColumnInfo?.columnItems} />
                    <FooterColumns type="socialMedia" columnTitle={footerInfo.socialMediaColumnInfo.columnTitle} columnItems={footerInfo.socialMediaColumnInfo.columnItems} />
                </div>
                <div className="footer__copyright">
                    <div className="elft">
                        <button className="btn-big btn btn-green">
                            Become a Partner
                        </button>
                        <p>Find out about of affiliate and reseller opportunities</p>
                    </div>
                    <div className="right">
                        <p>Copyright © 2021 Plant Milk Maker</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}