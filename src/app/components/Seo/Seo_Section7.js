"use client"
import Link from "next/link";
import { useState } from 'react';
export default function Shopify_App_Section7() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <section className="section spdtb">
                <div className="container">
                    <div className="heading align-center mb60">
                        <h2 className="heading-title size-l">Frequently asked questions</h2>
                        <p className="heading-desc">
                            Haven’t got your answer?{" "}
                            <Link href="/" title="Contact our support now">
                                Contact our support now
                            </Link>
                        </p>
                    </div>
                    <div className="block-accordion enable layout-02">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={isActive.key == 1 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(1)}>
                                    <p className="title">Do I have to pay for each agent account?</p>
                                    <div className="content" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 2 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(2)}>
                                    <p className="title">Are there any additional costs?</p>
                                    <div className="content" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 3 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(3)}>
                                    <p className="title">Do you provide customer service agents?</p>
                                    <div className="content" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 4 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(4)}>
                                    <p className="title">Are there any discounts avalaible?</p>
                                    <div className="content" style={isActive.key == 4 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 5 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(5)}>
                                    <p className="title">Do you provide customer service agents?</p>
                                    <div className="content" style={isActive.key == 5 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={isActive.key == 6 ? "accordion-item background-grey is-active" : "accordion-item background-grey"} onClick={() => handleToggle(6)}>
                                    <p className="title">Are there any discounts avalaible?</p>
                                    <div className="content" style={isActive.key == 6 ? { display: 'block' } : { display: 'none' }}><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}