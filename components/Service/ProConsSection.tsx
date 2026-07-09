import RightSideBar from "./RightSideBar";

export default function ProConsSection() {
    return (
      <section id="pro-cons-section">
      <div className="container">
          <div className="row pro-con-main-wrap">
              <div className="col-12 col-lg-8 pro-con-text-col">
                  <h3 className="pros pink">Pros:</h3>
                  <p className="pros first">
                      Cloud applications are gaining traction. Thanks to the various benefits that it offers to businesses. Check out the advantages here:
                  </p>
                  <h4 className="pros pink">Less Infrastructure Cost</h4>
                  <p className="pros">
                      Compared to on premise apps, applications running on cloud save a significant amount of cost for businesses. No need to procure expensive servers or hire IT staff to install and carry maintenance. The headache of offering uninterrupted services stays with the service providers instead.
                  </p>
                  <h4 className="pros pink">Enable High Uptime</h4>
                  <p className="pros">
                      Moving to the clouds means maximizing the uptime to a great extent. Without worrying about human errors or system failures instilling unplanned downtime, businesses can enjoy a more reliable solution.
                  </p>
                  <h4 className="pros pink">Pay As Per Usage</h4>
                  <p className="pros">
                      Scaling your business is easy with cloud applications. All you need to do is pay extra for the additional usage and increase your storage and compute in a matter of minutes.
                  </p>

                  <h3 className="cons pink">Cons:</h3>
                  <p className="cons first">
                      While advantages are difficult to ignore, cloud applications do bring a few limitations that are equally important to consider.
                  </p>
                  <h4 className="cons">Limits the Business Control</h4>
                  <p className="cons">
                      The concept of giving control of one’s app data storage to service providers owning the cloud space feels a little insecure. This is why precisely reading every term of the end-user license agreement prepared by the datacentres becomes crucial. Understand the extent of control you will have on your application after hosting on servers that you do not own.

                  </p>
                  <h4 className="cons">Vendors Platforms Incompatibility</h4>
                  <p className="cons">
                      Businesses may come across major complications when migrating data from one vendor to another. This problem is more pronounced when the two vendors do not share similar platforms. However, a competent cloud service provider would allow you to carry the process efficiently and securely.
                  </p>
                  <h4 className="cons">Higher Cost Concerns</h4>
                  <p className="cons">
                      The ‘pay-as-per-your-use’ theory offers flexibility to manage the budgets according to your needs. However, with increased users and extensive features, you may end up paying a lot more to the cloud service providers. Hence, you must weigh every option before opting for cloud applications.
                      <br /> <br />
                      It is certain that cloud applications are a cost-effective alternative to traditional solutions, businesses must take a closer look at what to expect. To further understand what these apps entail, click below.
                  </p>
                  <button className="C2A-btn pink" data-bs-toggle="modal" data-bs-target="#enquireModalMobile">Get A Quote Now</button>

              </div>
              
              <RightSideBar />
          </div>
      </div>
  </section>
    );
}