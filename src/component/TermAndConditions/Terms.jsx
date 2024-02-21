import React, { useEffect } from "react";
import WOW from "wow.js";

export const Terms = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <section id="terms">
        <div
          className="section pb-10 min-h-screen p-6"
          id="terms"
          style={{ textAlign: "justify", textJustify: "auto" }}
        >
          <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
            <p className="text-4xl sm:text-4xl lg:text-5xl text-[#ff6537] font-Achi font-bold text-center wow fadeInUp pt-4 ">
              Terms And Conditions
            </p>
            <div className="">
              <p className="mt-6 text-gray-500 text-base  wow fadeInUp">
                Welcome to Vagus Overseas Education, your trusted provider of education abroad services. By using our services, you agree to comply with and be bound by the following terms and conditions:
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">1. Acceptance of Terms</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                By accessing or using the services provided by Vagus Overseas Education, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">2. Services</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Overseas Education offers a range of education abroad services. The specific details, including programs, eligibility criteria, and application procedures, will be outlined in our communications or on our website.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">3. Student Responsibilities</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Students are responsible for providing accurate and complete information when applying for education abroad programs. Any misrepresentation of facts may lead to disqualification from the program.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">4. Payment</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Payment terms and conditions for education abroad programs will be communicated during the application process. Students are required to adhere to the payment schedule and terms specified by Vagus Overseas Education.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">5. Intellectual Property</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                All educational materials, resources, and content provided by Vagus Overseas Education are protected by intellectual property laws. Students are granted a limited, non-transferable license to use the materials for educational purposes only.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">6. Confidentiality</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Overseas Education is committed to maintaining the confidentiality of student information. We will not disclose any personal or sensitive information to third parties without the student's consent, except as required by law.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">7. Changes to Terms</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Overseas Education reserves the right to modify these terms and conditions at any time without prior notice. Students will be informed of any significant changes that may affect their rights or obligations.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">8. Dispute Resolution</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Any disputes arising from or relating to these terms and conditions will be resolved through mediation or arbitration in accordance with the laws of [Your Jurisdiction].
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">9. Limitation of Liability</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Vagus Overseas Education shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or participation in our programs. Our liability, if any, shall be limited to the fees paid by the student for the specific program.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">10. Governing Law</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">11. Contact Information</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                If you have any questions or concerns regarding these terms and conditions, please contact us at{" "}
                <a href="mailto:info@vagusoverseaseducation.ind.in">info@vagusoverseaseducation.ind.in</a>.
              </p>

              <p>These terms and conditions were last updated on 2024.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
