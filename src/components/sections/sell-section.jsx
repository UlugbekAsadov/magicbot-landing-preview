"use client";

import {useLocaleContext} from "@/context/locale.context";

export default function SellSection() {
    const {translate} = useLocaleContext();
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 lg-order-1 flex items-center">
                            <div className="pdl50">
                                <div className="images layout-10">
                                    <div className="inner">
                                        <img
                                            className="video-image wow animate__animated animate__fadeInLeft"
                                            src="/assets/images/video.gif"
                                            alt="Magicbot uz images"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-2">
                            <div className="pdr50 pdl80 lg-mt32">
                                <div className="heading mb24">
                                    <div className="heading-sub">
                                        {translate("possibilities.sell.title")}
                                    </div>
                                    <h2 className="heading-title size-l">
                                        {translate("possibilities.sell.heading")}
                                    </h2>
                                    <div className="heading-desc">
                                        {translate("possibilities.sell.text")}
                                    </div>
                                </div>
                                <div className="block-list layout-01 block-list-flex">
                                    <ul>
                                        <li>
                                            <i className="las la-check"/>
                                            <span>
                                                {" "}
                                                {translate("possibilities.sell.adv_1")}
                                            </span>
                                        </li>
                                        <li>
                                            <i className="las la-check"/>
                                            <span>
                                                {" "}
                                                {translate("possibilities.sell.adv_2")}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
