"use client";

export default function App_Showcase_Section10() {
  return (
    <>
      <section className="section-team section has-icon icon-bottom-left spdtb">
        <div className="container">
          <div className="heading align-center">
            <h2 className="heading-title">Meet Our Team</h2>
            <p>A creative agency like no other</p>
          </div>
          <div className="block-team layout-01">
            <div className="row">
              <div className="col-lg-4">
                <div className="member-box align-center">
                  <div className="inner">
                    <div className="member-avatar">
                      <div className="avatar-inner">
                        <img src="/assets/images/mem-1.png" alt="Member" />
                        <img
                          src="/assets/images/stick-01.png"
                          alt="Stick"
                          className="stick stick-top-right"
                        />
                      </div>
                    </div>
                    <div className="member-content">
                      <h4 className="name">St??phane Gibert</h4>
                      <div className="position">Co-Founder</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="member-box align-center">
                  <div className="inner">
                    <div className="member-avatar">
                      <div className="avatar-inner">
                        <img src="/assets/images/mem-2.png" alt="Member" />
                        <img
                          src="/assets/images/stick-02.png"
                          alt="Stick"
                          className="stick stick-bottom-right"
                        />
                      </div>
                    </div>
                    <div className="member-content">
                      <h4 className="name">Miriam Jesus</h4>
                      <div className="position">UX, UI Designer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="member-box align-center">
                  <div className="inner">
                    <div className="member-avatar">
                      <div className="avatar-inner">
                        <img src="/assets/images/mem-3.png" alt="Member" />
                        <img
                          src="/assets/images/stick-03.png"
                          alt="Stick"
                          className="stick stick-top-left"
                        />
                      </div>
                    </div>
                    <div className="member-content">
                      <h4 className="name">John Doe</h4>
                      <div className="position">Head of Makerting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="icon" src="/assets/images/asc6.png" alt="Image" />
      </section>
    </>
  );
}
