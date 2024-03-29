'use client'
import {useState, useEffect, useRef} from 'react';
import {IoIosCloseCircle} from "react-icons/io";
import {cn} from "@/lib/utils";
import Link from "next/link"


function Bottomline() {
  let [terms, setTerms] = useState(false);
  let [policy, setPolicy] = useState(false);
  const policyRef = useRef();
  const termsRef = useRef();

  useEffect(() => {
    const handlerTerms = (e) => {
      if(!termsRef.current?.contains(e.target)) {
        setTerms(false)
      }
    }
      document.addEventListener("mousedown", handlerTerms)
  }, [])

  useEffect(() => {
    const handlerPolicy = (e) => {
      if(!policyRef.current?.contains(e.target)) {
        setPolicy(false)
      }
    }
    document.addEventListener("mousedown", handlerPolicy)
  }, []);

  return (
    <div className={``}>
      <div className={`fixed bottom-0 bg-black w-full pl-5 text-xs text-gray-400`}>© <span className={`cursor-not-allowed`}>MAD MANS SPIRIT. ALL RIGHTS RESERVED</span> - <span onClick={() => setTerms(true)} className={`cursor-help`}>TERMS & CONDITIONS</span> - <span onClick={() => setPolicy(true)} className={`cursor-help`}>PRIVACY POLICY</span> - <span> <Link href={`contact`}>CONTACT</Link></span> <span> - <Link href={`/profile`}>PROFILE</Link></span></div>

      <div className={cn(`top-0 r-0 w-full h-full bg-black/80 z-50`, terms === false ? "hidden" : "absolute")}>
        <div className={`flex justify-center items-center h-full`}>
          <div ref={termsRef} className={` w-full lg:w-2/3 px-5 py-3 h-2/3 text-sm overflow-auto overflow-x-hidden bg-white text-black   mx-5`}>
            <div onClick={() => setTerms(!terms)} className={`float-end p-5`}><IoIosCloseCircle className={`fixed right-10 lg:right-[20%] w-7 h-7 hover:rotate-180 duration-300 cursor-pointer -mt-5`} /></div>
            <span className={`text-lg`}>Terms & Conditions</span> <br/><br/>
            <span className={`text-lg`}>LAST UPDATED: March 7, 2024</span> <br/><br/>
            <p className={`tracking-wider`}>{`
              Welcome to madmansspirit.com (hereafter referred to as "the Site"). Our services are provided to you subject to the following notices, terms, and conditions ("Terms"). By using the Site, you agree to follow and be bound by these Terms and all laws and regulations governing the Site. Madmansspirit.com and Vario Trading  Solutions LTD, the web agency of record for madmansspirit.com, reserves the right to change these Terms at any time. All changes shall apply to transactions made following posted notice on the Site.
            `}</p><br/>

            <span className={`text-lg`}>Lawful Use</span><br/><br/>
            <p className={`tracking-wider`}>{
              `You may visit, view, and retain copies of the Site for your own personal use but may not duplicate, download, publish, modify, or otherwise distribute information from the Site for any purpose other than to review event information and to purchase tickets for personal use, unless otherwise specifically authorized by madmansspirit.com and Vario Trading  Solutions LTD. Madmansspirit.com reserves the right to refuse service, terminate accounts, and/or cancels orders at their discretion, including, without limitation, if madmansspirit.com reserves the right to believes the customer's conduct violates applicable law(s) or is harmful to the interests of madmansspirit.com. This Site is designed for and targeted to persons of age of least 18 years or older. In order to use and access the features and services provided by this Site your age must be 18 years more. If you are not an adult, please close the Site.`
            }</p> <br/>

            <span className={`text-lg`}>Personal and Other Information Submitted Through the Site</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`Submission of  your personal information through the Site is governed by the Site's Privacy Policy. This Agreement incorporates by reference the terms and conditions of the Privacy Policy. We also welcome any comments about the Site; however, any comments, reviews, messages, suggestions or other communications (collectively "Comments") sent to the Site shall become the property of madmansspirit.com and  Vario Trading Solutions LTD. Submission of your any such Comments shall constitute an assignment madmansspirit.com and Vario Trading Solutions LTD. of all worldwide rights, titles and interests in all copyrights and other intellectual property rights in the Comments. Madmansspirit.com and Vario Trading Solutions LTD. will be entitled to use, reproduce, disclose, publish and distribute any material submitted by you for any purpose whatsoever, without restriction and without compensating you in any way. Based on this fact, we ask that you not send us any comments that you do not wish to assign to us.`}
            </p> <br/>

            <span className={`text-lg`}>Use Restrictions</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`Each time by using a password or log-in credential, you will be deemed to be authorized to access and use the Site in a manner consistent with Agreement. You agree under any circumstances not to:`}
            </p> <br/>
              <ul>
                <li className={`tracking-wider`}>1. post any abusive, threatening, obscene, defamatory, libelous, or racially, sexually, religiously, or otherwise objectionable and offensive information</li>
                <li className={`tracking-wider`}>2. use the service for any unlawful purpose or for the promotion of illegal activities</li>
                <li className={`tracking-wider`}>3. attempt to, or harass, abuse or harm another person or group</li>
                <li className={`tracking-wider`}>{`4. log in with another user's madmansspirit.com account without permission`}</li>
                <li className={`tracking-wider`}>5. interfere or attempt to interfere with the proper functioning of the services</li>
                <li className={`tracking-wider`}>6. make any automated use of the system, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure</li>
                <li className={`tracking-wider`}>7.bypass any robot exclusion headers or other measures we take to restrict access to the services or use any software, technology, or device to scrape, spider, or crawl the services or harvest or manipulate data</li>
                <li className={`tracking-wider`}>8. apply the communication systems provided by or contacts made for any commercial solicitation purposes</li>
                <li className={`tracking-wider`}>{`9. publish or link to malicious content with the intention to damage or disrupt another user's browser or computer`}</li>
              </ul> <br/><br/>
            <span className={`text-lg`}>Copyright</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`All content included on the Site (text, graphics, logos, button icons, images, software, etc.) is the property of madmansspirit.com and Vario Trading  Solutions LTD. or its content suppliers and is protected by U.S. and international copyright laws. Compilation of all content on the Site is the exclusive property of madmansspirit.com and Vario Trading Solutions LTD. and is protected by U.S. and international copyright laws. The Site's content and software may be used as a shopping resource. Any other use, including reproduction, modification, distribution, transmission, republication, display, or public performance, is strictly prohibited. All rights reserved.`}
            </p>

            <span className={`text-lg`}>Links to External Web Sites and Services</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`The Site may contain links to other websites that are not controlled by madmansspirit.com and Vario Trading  Solutions LTD. Madmansspirit.com and Vario Trading  Solutions LTD have no responsibility for those linked external web pages nor does linking constitute an endorsement of any. By clicking and following such links, you will leave the Site and your activities may be governed by different terms and conditions and privacy practices than on our Site. The provided links serve only the convenience and information of the Sites' users.`}
            </p>

            <span className={`text-lg`}>Termination</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
If you wish to terminate your account, you may simply discontinue using Service.
All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`}
            </p>
            <span className={`text-lg`}>Amendments To Terms</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`Madmansspirit.com preserves the right to amend Terms at any time by posting the amended terms on this Site. It is your responsibility to review these Terms from time to time.
By continuing using of the Site following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently to be aware of any changes, as they are binding on you.
By continuing to access or use our Site or Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to those, you are no longer authorized to use our Site or Services.`}
            </p>
            <span className={`text-lg`}>Disclaimer and Limitation of Liability</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`You expressly agree that use of the Site is at your own risk. Madmansspirit.com does not promise the Site will be error free or uninterrupted, or that it will provide specific results from use of the Site content. The Site and its content are delivered on an "as available" basis without warranties of any kind, either express or implied, including, but not limited to, warranties of merchantability or fitness for a particular purpose.
Except in jurisdictions where such provisions are restricted, in no event will madmansspirit.com and Vario Trading  Solutions LTD. be liable for any indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profits, even if madmansspirit.com and Vario Trading  Solutions LTD. has been advised of the possibility of damages. We reserve the right to correct any errors, inaccuracies or omissions on our Site and to change or update information or cancel orders if any information on the Site is inaccurate at any time without prior notice (including after you have submitted your order).This disclaimer of liability applies to any and all damages or injury from any cause. These include, without limitation, damages or injury caused by failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction, or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortuous behavior, negligence, or under any other cause of action.`}
            </p>
          </div>
        </div>
      </div>

      <div className={cn(`top-0 r-0 w-full h-full bg-black/80 z-50`, policy === false ? "hidden" : "absolute")}>
        <div className={`flex justify-center items-center h-full`}>
          <div ref={policyRef} className={` w-full lg:w-2/3 px-5 py-3 h-2/3 text-sm overflow-auto overflow-x-hidden bg-white text-black mx-5`}>
            <div onClick={() => setPolicy(!policy)} className={`float-end p-5`}><IoIosCloseCircle className={`fixed text-black right-10 lg:right-[20%] w-7 h-7 hover:rotate-180 duration-300 cursor-pointer -mt-5`} /></div>
            <span className={`text-lg`}>Privacy Policy<br/> Published March 7, 2024</span> <br/><br/>
            <p className={`tracking-wider`}>
              {`This privacy policy applies only to the website owned, operated and maintained by Mad Man’s Spirit LTD. (collectively referred to as the "Parties", "we" or "us") where this privacy policy is posted (collectively, the "Site"). This privacy policy does not pertain to information that is collected offline. BY USING THE SITE, YOU CONSENT TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY AND TO OUR PROCESSING OF PERSONAL INFORMATION FOR THE PURPOSES STATED BELOW. IF YOU DO NOT AGREE TO THE TERMS AND CONDITIONS OF THIS PRIVACY POLICY, PLEASE DO NOT USE THE SITE.`}
            </p><br/>

            <span className={`text-lg`}>1. Information Collected</span><br/><br/>
            <p className={`tracking-wider`}>
              {`This privacy policy applies only to information collected on the Site and does not apply to information collected by us through any other means. We collect the information you provide to us actively, and also collect information automatically from the devices that interact with our Site, as explained below.`}
            </p> <br/>
            <p className={`tracking-wider`}>
              {`a) Information You Actively Provide`}
            </p> <br/>
            <p className={`tracking-wider`}>
              {`We collect account details and personal information, such as your name, address, telephone number, email address, age, gender, or company name, that you actively provide to us when you register, subscribe, communicate, or transact business with our Site.`}
            </p> <br/>
            <p className={`tracking-wider`}>
              {`We receive and store the information that you enter on our Site or give to us in any other way. The above list provides an example of the personally identifiable information that may be collected on the Site. If you do not want us to collect your personally identifiable information, please do not provide it to us. You can also define the additionally collected information by selecting of cookies.`}
            </p> <br/>
            <p className={`tracking-wider`}>
              {`b) Information Collected From or About the Devices that Interact with our Site`}
            </p> <br/>
            <p className={`tracking-wider`}>
              {`We receive and store information from and about the devices (such computers, smartphones) that interact with our site, including the Internet protocol (IP) address used to connect your computer to the Internet; your login credentials; and computer and connection information such as browser type, version, and time zone setting, browser plug-in types and versions, operating system, and platform. We use cookies, web beacons, and other technologies to measure and collect session information, including page response times, and to measure and understand visitor behaviours on the site. We may also collect technical information to help us identify your device for reasons of security and site integrity.`}
            </p> <br/>

            <span className={`text-lg`}>2. Use of Information Collected Via the Site</span><br/><br/>
            <p className={`tracking-wider`}>We use the information that you actively provide:</p><br/>
            <ul>
              <li className={`tracking-wider`}>1. To deliver services, such as educational programs, information, newsletters, goods you request or purchase</li>
              <li className={`tracking-wider`}>2. To alert you to special offers, updated information and other new services from us, or other third parties, or to forward promotional materials</li>
              <li className={`tracking-wider`}>3. To complete a transaction or service requested by you</li>
              <li className={`tracking-wider`}>{`4. To fulfil the terms of a promotion`}</li>
              <li className={`tracking-wider`}>5. To ensure the Site are relevant to your needs</li>
              <li className={`tracking-wider`}>6. To help us create and publish content most relevant to you</li>
              <li className={`tracking-wider`}>7. To notify you about a material change to this privacy policy or the Visitor Agreement, if necessary</li>
              <li className={`tracking-wider`}>8. To allow you access to limited-entry areas of the Site</li>
              <li className={`tracking-wider`}>{`9. To contact you in response to sign up forms such as Contact Us or Order Inquiry`}</li>
            </ul> <br/><br/>

            <span className={`text-lg`}>3. Sharing and Disclosure of Information</span> <br/><br/>
            <p className={`tracking-wider`}>We may share or disclose the information you provide, including name and contact details in the following instances:</p> <br/>
            <p className={`tracking-wider`}>{`a) To Publisher, subject to Publisher's privacy policy. If you do not want us to share your personally identifiable information with Publisher, please do not provide us with this information.`}</p> <br/>
            <p className={`tracking-wider`}>{`b) To complete your purchase. If you choose to make a purchase on the Site, we may collect from you your billing address and other information related to such purchase, and we may use such collected information in order to fulfil your purchase.`}</p> <br/>
            <p className={`tracking-wider`}>{`c) To affiliates, strategic partners, agents, third party marketers or other unaffiliated parties, who are offering products or services, that we believe may be of interest to you, or who require your personally identifiable information for research, administrative and/or internal business purposes. These parties may use your personally identifiable information to contact you with an offer or advertisement related to a product or service, or they may use such information for their own research, administration or business purposes. If you do not want us to share your personally identifiable information in this manner, please do not provide us with this information.`}</p> <br/>
            <p className={`tracking-wider`}>{`d) To unaffiliated third-party service providers, agents or independent contractors, who help us maintain our Site and provide other administrative services to us (including, but not limited to, order processing and fulfilment, providing customer service, maintaining and analyzing data, sending customer communications on our behalf, and entry collection, winner selection and prize fulfilment for contests, sweepstakes and other promotions). We seek to ensure that these unaffiliated third parties will not use the personally identifiable information for any other purpose than to provide the administrative services, for which they are responsible. Because such unaffiliated third-party service providers, that help us administer our Site will have access to users' personally identifiable information, if you do not wish for our unaffiliated third-party service providers to have access to your information, please do not register or submit any personally identifiable information to us.`}</p> <br/>
            <p className={`tracking-wider`}>{`e) To fulfil a service to you. For example, if you email us a question, we may use your email address to process your request and respond to your question. Also, if you are entering a sweepstakes or contest, we may use your personally identifiable information in order to fulfil the terms of that promotion. This means that we may share the information for prize fulfilment purposes or mail carriers. We also may share your information with the co-sponsor of that promotion.`}</p> <br/>
            <p className={`tracking-wider`}>{`f) To protect against potential fraud, we may verify with third parties the information collected from the Site. In the course of such verification, we may receive personally identifiable information about you from such services. In particular, if you use a credit card or debit card to purchase services with us, we may use card authorization and fraud screening services to verify that your card information and address matches the information that you supplied to us, and that the card has not been reported as lost or stolen.`}</p> <br/>
            <p className={`tracking-wider`}>{`g) To third parties as part of any corporate reorganization process including, but not limited to, mergers, acquisitions, and sales of all or substantially all of our assets.`}</p> <br/>
            <p className={`tracking-wider`}>{`h) To track and analyze non-identifying and aggregate usage and volume statistical information from our visitors and customers and provide such information to third parties.`}</p> <br/>
            <p className={`tracking-wider`}>{`i) To comply with the law or in the good faith belief, that such action is necessary in order to conform to the requirements of law or comply with legal process served on us, protect and defend our rights or property, or act in urgent circumstances to protect the personal safety of our end users.`}</p> <br/>
            <p className={`tracking-wider`}>{`Except as described in this Privacy Policy or at the time we request the information, we do not otherwise use, share or otherwise disclose your name and contact or payment details to any third parties.`}</p> <br/>
            <p className={`tracking-wider`}>{`If you wish to delete, access or move your data contact us at privacy@madmansspirit.com and the team at Mad Man’s Spirit will assist you. We comply with GDPR (General Data Protection Regulation) and CCPA policy.`}</p> <br/>

            <span className={`text-lg`}>4. Online Tracking and Third Party Advertising</span> <br/><br/>
            <p className={`tracking-wider`}>{`We use cookies, web beacons, and other tracking technologies for analytics and advertising purposes. Visit www.allaboutcookies.org for more information about cookies and web beacons. When you interact with our Site, interest-based advertisements may be displayed to you based upon information such as purchasing or browsing behaviours on our Site.`}</p> <br/>
            <p className={`tracking-wider`}>{`These tracking technologies enable us to identify the ads you see, whether you click on them, and other actions you take on our Site, so that we can tailor advertising, including for example avoiding repetition of ad content. We do not use personal information, such as name or contact details, to tailor advertising. For example, if you visit this website, your visit may be recorded in a cookie, which may result in your seeing a targeted ad, when you visit a different website. For more information about interest based advertising and the ability to opt-out from this practice across multiple companies, please visit http://www.aboutads.info/choices/. Some media buying platforms such as Facebook enable us to use personal information such as email addresses, and we take steps to honour the privacy restrictions imposed by those platforms.`}</p> <br/>
            <p className={`tracking-wider`}>{`We may use advertisers, third party ad networks, and other advertising companies, to serve advertisements on the Site. Please be advised that such advertising companies may gather information about your visit to the Site or other sites (such as through cookies, web beacons and other technologies) to enable such advertising companies to market products or services to you, to monitor which ads have been served to your browser, and which web pages you were viewing when such ads were delivered. These advertisers may read and place cookies on our Site, but they do not have access to personal information such as name or contact details.`}</p> <br/>
            <p className={`tracking-wider`}>{`Our Site, whether accessed on a computer or a mobile device, is not at this time configured to read or respond to 'Do Not Track' settings or signals in your browser headings, which vary by browser provider. In lieu of a browser-based opt-out solution, users can utilize the Digital Advertising Alliance and other approved methods for placement of opt-out cookies. Our site and those of our third party advertisers or other vendors are configured to read and honour these opt-out cookies, so long as they are present on your computer. Please note, if you delete all cookies, you will need to reset your opt-out cookies. Specific instructions on how to proceed follow. However, please be aware that we do not control these opt-out processes.`}</p> <br/>
            <p className={`tracking-wider`}>{`Cookie Policy.`}</p> <br/>
            <p className={`tracking-wider`}>{`We use cookies when you visit our site. There are four main types of cookies – here’s how and why we use them.`}</p> <br/>
            <p className={`tracking-wider`}>{`a) Essential cookies – these cookies allow you to navigate the site and use our features. These cookies are required secure the functionality of our website and for necessary activities like fraud protection. These cookies do not store any personally identifiable information and can’t be switched off.`}</p> <br/>
            <p className={`tracking-wider`}>{`b) Performance measuring cookies – these cookies allow us to measure and analyse how our customers use the site, to improve both its functionality and your shopping experience.`}</p> <br/>
            <p className={`tracking-wider`}>{`c) Functional cookies – when you are browsing or shopping on a store hosted by Mad Man’s Spirit , these cookies will remember your preferences (like your language or location), so we can make your shopping experience as seamless as possible, and more personal to you.`}</p> <br/>
            <p className={`tracking-wider`}>{`d) Personalized Marketing cookies – these cookies are used to deliver ads relevant to you. They also limit the number of times that you see an ad and help us measure the effectiveness of our marketing campaigns.`}</p> <br/>
            <p className={`tracking-wider`}>{`By using our site, you agree to us placing these sorts of cookies on your device and accessing them when you visit the site in the future. If you want to delete any cookies that are already on your computer, the “help” section in your browser should provide instructions on how to locate the file or directory that stores cookies.`}</p> <br/>
            <p className={`tracking-wider`}>{`Please note that by deleting or disabling future cookies, your user experience may be affected and you might not be able to take advantage of certain functions of our site.`}</p> <br/>

            <span className={`text-lg`}>5. Minors</span> <br/><br/>
            <p className={`tracking-wider`}>{`The features, programs, promotions and other aspects of this Site requiring personally identifiable information are not intended for children. We do not knowingly collect personally identifiable information from children under the age of thirteen (13). If you are a parent or guardian of a child under the age of thirteen (13) and believe he or she has disclosed personally identifiable information to us, please contact us at privacy@madmansspirit.com. A parent or guardian of a child under the age of thirteen (13) may review and request deletion of such child's personally identifiable information as well as prohibit the use thereof.`}</p> <br/>

            <span className={`text-lg`}>6. International Transfer of Information</span> <br/><br/>
            <p className={`tracking-wider`}>{`If you choose to provide us with personally identifiable information, we may transfer that information to our affiliates and subsidiaries or to other third parties, across borders, and from your country or jurisdiction to other countries or jurisdictions around the world. If you are visiting from the European Union or other regions with laws governing data collection and use that may differ from UK law, please note that you are transferring your personally identifiable information to the United Kingdom, which could have the different data protection laws as the EU or USA and by providing your personally identifiable information you consent to:`}</p> <br/>
            <p className={`tracking-wider`}>{`The use of your personally identifiable information for the uses identified above in accordance with this privacy policy and The transfer of your personally identifiable information to the United Kingdom as indicated above.`}</p> <br/>

            <span className={`text-lg`}>7. Third Party Websites</span> <br/><br/>
            <p className={`tracking-wider`}>{`This statement applies to information collected on the Site. The Site may contain links to other websites. We are not responsible for the privacy practices or the content of these other web sites.`}</p> <br/>

            <span className={`text-lg`}>8. Chat Rooms, Forums, Product Reviews and Other Public Posting Areas</span> <br/><br/>
            <p className={`tracking-wider`}>{`Please note that any information you include in a message you post to any chat room, forum or other public posting area is available to anyone with Internet access. If you don't want people to know your email address, for example, don't include it in any message you post publicly. PLEASE BE EXTREMELY CAREFUL WHEN DISCLOSING ANY INFORMATION IN CHAT ROOMS, FORUMS AND OTHER PUBLIC POSTING AREAS. WE ARE NOT RESPONSIBLE FOR THE USE BY OTHERS OF THE INFORMATION THAT YOU DISCLOSE IN CHAT ROOMS, FORUMS AND OTHER PUBLIC POSTING AREAS.`}</p> <br/>

            <span className={`text-lg`}>9. Email Opt-Out</span> <br/><br/>
            <p className={`tracking-wider`}>{`We communicate with users, who subscribe to our services on a regular basis via email. For example, we may use your email address to confirm your request, to send you notice of payments, to send you information about changes to our products and services, and to send notices and other disclosures as required by law. Generally, users cannot opt-out of these communications, but they will be primarily informational in nature rather than promotional. However, we provide you the opportunity to exercise an opt-out choice if you do not want to receive other types of communication from us, such as emails or updates from us regarding new services and products offered on this Site or if you do not want us to share your personally identifiable information with third parties. The opt-out choice may be exercised by ticking or un-ticking the appropriate box if such checkbox is available at the points where personally identifiable information is collected or by contacting us. We will process your unsubscribe as soon as possible, but please be aware that in some circumstances you may receive a few more messages until the unsubscribe is processed. You also may opt-out of receiving such emails by clicking on the "unsubscribe" link within the text of the email.`}</p> <br/>

            <span className={`text-lg`}>10. Security</span> <br/><br/>
            <p className={`tracking-wider`}>{`No data transmissions over the Internet can be guaranteed to be 100% secure. Consequently, we cannot ensure or warrant the security of any information you transmit to us and you understand that any information that you transfer to us is done at your own risk. Once we receive your transmission, we make reasonable efforts to ensure security on our systems. We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you input. However, please note that this is not a guarantee that such information may not be accessed, disclosed, altered or destroyed by breach of such firewalls and secure server software.`}</p> <br/>

            <span className={`text-lg`}>11. Amendments to this Privacy Policy</span> <br/><br/>
            <p className={`tracking-wider`}>{`We reserve the right to amend this privacy policy from time to time. When we do, we will also revise the "last update" date of this privacy policy. For changes to this privacy policy that may be materially less restrictive on our use or disclosure of personal information you have provided to us, we will attempt to obtain your consent before implementing the change by sending a notice to the primary email address specified in your account or by placing a prominent notice on the Site.`}</p> <br/>

            <span className={`text-lg`}>12. Assignment</span> <br/><br/>
            <p className={`tracking-wider`}>{`In the event that all or part of our assets are sold or acquired by another party, or in the event of a merger, you grant us the right to assign the personally identifiable and non-personally identifiable information collected via the Site.`}</p> <br/>

            <span className={`text-lg`}>13. Contacting Us</span> <br/><br/>
            <p className={`tracking-wider`}>{`If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@madmansspirit.com. All information you provide in any written communication will also be covered by this policy.`}</p> <br/>

            <span className={`text-lg`}>FOR UNITED STATES USERS - YOUR CALIFORNIA PRIVACY RIGHTS</span> <br/><br/>
            <p className={`tracking-wider`}>{`Beginning on January 1, 2020, the California Consumer Privacy Act 1798.100 (CCPA) permits our visitors who are California residents to know what personal data is being collected about them, know whether their personal data is sold or disclosed and to whom, say no to the sale of personal data, access their personal data, request a business to delete any personal information about a consumer collected from that consumer, and not be discriminated against for exercising their privacy rights. To make such a request, please contact us on our email privacy@madmansspirit.com`}</p> <br/>

            <span className={`text-lg`}>FOR UNITED STATES USERS - YOUR CALIFORNIA PRIVACY RIGHTS</span> <br/><br/>
            <p className={`tracking-wider`}>{`Beginning on January 1, 2020, the California Consumer Privacy Act 1798.100 (CCPA) permits our visitors who are California residents to know what personal data is being collected about them, know whether their personal data is sold or disclosed and to whom, say no to the sale of personal data, access their personal data, request a business to delete ane personal information about a consumer collected from that consumer, and not be discriminated against for exercising their privacy rights. To make such a request, please contact us on our email: privacy@madmansspirit.com`}</p> <br/>
            <p className={`tracking-wider`}>{`© Mad Man's Spirit. All rights reserved. Web site created by S. MacConnich`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottomline;