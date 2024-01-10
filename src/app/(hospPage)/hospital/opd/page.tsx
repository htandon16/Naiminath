"use client";
import React, { useEffect, useState } from "react";
import "../style.css";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/store";
import Abhyangam from "../../treatment/abhyangam/page";
import KizhiPage from "../../treatment/kizhi/page";
import SpineBastiPage from "../../treatment/spine-basti/page";
import KatiBastiPage from "../../treatment/kati-basti/page";
import GreevaBastiPage from "../../treatment/greeva-basti/page";
import JanuBastiPage from "../../treatment/janu-basti/page";
import SirodharaPage from "../../treatment/shirodhara/page";
import KashydharaPage from "../../treatment/kashayadhara/page";
import MukhaLepam from "../../treatment/mukha-lepam/page";
import NetraTarpanamPage from "../../treatment/netra-tarpanam/page";
import { Helmet } from "react-helmet";
import { render } from "react-dom";
import { renderToHTML } from "next/dist/server/render";
import { renderToReadableStream } from "next/dist/server/app-render/entry-base";

const Hospital = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let id = searchParams?.id ? Number(searchParams.id) : 0;

  const items = [
    {
      title: "Kayachikitsa",
      content: (
        <>
          <p>
            Kayachikitsa is an important branch amongst eight branches of
            Ayurveda, dealing with multi-systemic illnesses. The holistic
            approach in consideration of Prakriti (Body Constitution), Saara
            (Tissue Essence), Satwa (Mental health), etc., Asthasthana (Nadi
            Pareeksha, etc.), Dashavidha diagnostic’s tools and therapeutics
            with various medicaments (Detoxifying & Palliative) is the
            uniqueness of this specialty. A unique aspect of Kaya Chikitsa is
            Kaya Kalpa. Kaya Kalpa refers to the renewal and rejuvenation of the
            body. It sustains the youthfulness of the body and slows down the
            effects of aging through the application of physical and
            psychological methods to the body once it has been detoxified
            through Panchakarma.
          </p>
          <br />
          <br />
          <h6 className="text-[16px] font-semibold text-[#212121]">
            Medical Conditions Comprehensively Managed By Kayachikitsa
            Speciality at Naiminath
          </h6>
          <br />
          <p>
            Musculoskeletal Disorders (Osteoarthritis, Spondylosis, Slip Disc,
            Backache, Joint pain, etc.)
          </p>
          <br />
          <p>
            Hepatobiliary Disorders (Jaundice, Liver Cirrhosis, Ascites,
            Gallstones, Hepatitis, etc.) Neurological Disorders (Paralysis,
            Bell’s palsy, Sensory deficits, GB Syndrome, Motor Neuron Disease,
            Neuro-degenerative disorders, etc.)
          </p>
          <br />
          <p>
            Gastrointestinal Disorders (Hyperacidity, Constipation, Flatulence,
            Indigestion, Dysentery, Malabsorption, Food allergies, etc.)
          </p>
          <br />
          <p>
            {" "}
            Oncological Disorders (Adjuvant therapy for various Malignancies)
          </p>
        </>
      ),
      meta: (
          <head>
          <meta name="robots" content="max-image-preview:large" />
          <title>
            Kayachikitsa; Naiminath Ayurveda : Top BAMS College in India
          </title>
          <meta name="description" content="NA" />
          </head>
               ),
    },
    {
      title: "Kaumarbhritya",
      content: (
        <>
          <p>
            Kaumarabhritya speciality of Ayurveda deals with health & wellness
            of children. The speciality vividly deals with newborn and pediatric
            care with a great deal of scientific touch to nutrition, immunity
            including growth and development, Samskaras (ceremonies), Diseases,
            Graha rogas (Infectious diseases), treatments and drug doses. The
            purview of the speciality has been extended up to antenatal care and
            postnatal care of mother too. The OPD offers Suvarna Prashan Sanskar
            (child immunization) based on Ayurvedic medicine system. The process
            of Suvarna Prashan Sanskar involves the administering of purified
            ash of gold (Suvarna Bhasma) with fortified ghee to the child.
          </p>
          <br />
          <h6 className="text-[16px] font-semibold text-[#212121]">
            Treatment of Kaumarabhritya at Naiminath has one of the major
            possibilities in serving the pediatric conditions between the age
            group of 0 to 16 years with:
          </h6>
          <ul className="list-disc ml-8 mt-3">
            <li>Cerebral Palsy</li>
            <li>
              Developmental Disabilities (ADHD, Autism, Learning & Behavioral
              problems, etc.)
            </li>
            <li>Respiratory Disorders (Allergies, Asthma, Cough, etc.)</li>
            <li>Skin Diseases (Napkin Rashes, Psoriasis, Vitiligo, etc.)</li>
            <li>Dentation Difficulties</li>
            <li>Speech Disorders</li>
            <li>Bedwetting</li>
            <li>Vomiting, Constipation, Diarrhea, etc.</li>
            <li>Pediatric Counseling</li>
          </ul>
        </>
      ),
      meta: (
          <head>
          <meta name="robots" content="max-image-preview:large" />
          <title>
            Kaumarbhritya Naiminath Ayurveda : Top BAMS College in India
          </title>
          <meta name="description" content="NA" />
          </head>
      ),
    },
    {
      title: "Panchkarma",
      content: (
        <>
          <p>
            Panchkarma— panch and karmas, when literally translated means ‘Five
            Procedures’. It is an ayurvedic treatment that involves elaborated
            methods of purification to release stress, which prepares the body
            tissues to accept the maximum benefits of food, nutrition and
            exercise.
          </p>
          <br />
          <p>
            The five procedures are Vamana (Emesis), Virechana (Purgation),
            Niroohavasti (Decoction enema), Nasya (Instillation of medicine
            through nostrils), and Anuvasanavasti (Oil enema). Panchkarma
            treatment is a three stage process—purva (pre-operative), pradhana
            (operative) and paschat (post-operative) measures. Ayurveda advises
            to practice Purvakarma because of the deep rooted imbalances in the
            body, which needs to be flushed out in the right way by Purvakarma.
          </p>
          <br />
          <p>
            To undergo a purification therapy it is highly important for the
            body to be prepared for the rigorous process to encourage the body
            to let go of the toxins. Treatments like abhyangam, shirodhara and
            elakizhi are included to soften the tissues where the oil is applied
            to the entire body with a particular type of massage which helps the
            toxins to move towards the gastro- intestinal tract. Thereafter,
            therapies like Vamana, Virechana, Vasti, Nasya, Raktamoksha are used
            as per the body constitution (Vata, Pitta and Kapha) to complete the
            detoxifying process.
          </p>
          <br />
        </>
      ),
      meta: (
          <head>
          <meta name="robots" content="max-image-preview:large" />
          <title>
            Panchkarma Naiminath Ayurveda : Top BAMS College in India
          </title>
          <meta name="description" content="NA" />
          </head>
      ),
    },
    {
      title: "Prasuti & Stri Roga",
      content: (
        <>
          <p>
            Stree Roga and Prasooti Tantra is a significant branch of Ayurveda
            mainly dealing with child birth (Prasooti tantra /Obstetrics) and
            Gynecological (Streeroga) disorders.
          </p>
          <br />
          <p>
            The Department at Naiminath has well established OPD, IPD, minor and
            major operation theatre. In Asthang Ayurveda, Prasuti tantra and
            Stri rog caters to the prescriptive healthcare for the obstetrics
            and gynaecology sections. Prasuti and stri rog also offers
            systematic guidelines and procedures for complication-free delivery
            of baby during pregnancy. The protocol followed under Prasutti and
            Stri Rog for the delivery of a baby during pregnancy is referred to
            as Garbhini Pracharya. It offers a detailed account of the nutrition
            (ahar), lifestyle (vihar) and thoughts (vichar) during pregnancy for
            effective delivery of a healthy baby. You can consult our Doctors at
            Naiminath Ayurveda regarding:
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Routine ANC check-up and counselling</li>
              <li>Family planning and HIV counselling</li>
              <li>Treatment for Sukhaprasava</li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <meta name="robots" content="max-image-preview:large" />
          <title>
            Prasuti Stri Roga Naiminath Ayurveda : Top BAMS College in India
          </title>
          <meta name="description" content="NA" />
        </head>
      ),
    },
    {
      title: "Shalakya Tantra",
      content: (
        <>
          <p className="mt-2">
            Shalakyatantra deals with diseases of Eye, ENT, Oral, Dental, Head
            and Neck. Numbers of classical therapies are explained in the
            management of various diseases. Numerous classical medications are
            available in Ayurveda which acts as antioxidant, rejuvenating and
            regenerating in qualities that help in the management of EYE, ENT
            and Oro-Dental diseases.
          </p>
          <br />
          <p>
            Ailments of the eyes emanate from ‘doshas’ within the human body and
            anomalies of lifestyle. In the modern context, this translates into
            long work hours; work relates travel, food, bad habits like smoking
            and alcohol consumption. Common eye complaints viz., diminished
            vision for distant / near objects, redness, watering, pain,
            swelling, etc. conditions along with following specific ocular
            diseases are managed by Ayurveda with encouraging results.
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Refractive errors (Myopia, Hyperopia & Astigmatism)</li>
              <li>Dry eye syndrome</li>
              <li>Amblyopia</li>
              <li>Computer vision syndrome</li>
              <li>Allergic conjunctivitis</li>
              <li>Immature cataracts</li>
              <li>Glaucoma</li>
              <li>Vitreal degeneration</li>
              <li>Squint</li>
              <li>Diabetic / Hypertensive Retinopathy</li>
              <li>Retinitis pigmentosa</li>
              <li>Keratoconus</li>
              <li>Bullous Keratopathy</li>
              <li>Corneal Ulcers and Opacities, etc</li>
            </ul>
          </div>
          <br />
          <br />
          <p>
            Common ENT Complaints like frequent running nose, sneeze, headache,
            oral ulcers, throat pain, dental pain, ear pain, discharging ear,
            burning sensation in mouth and nose, itching / irritation in nose,
            throat, ears, etc conditions along with following specific ENT
            diseases are managed by Ayurveda with encouraging results.
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Naso-bronchial allergies</li>
              <li>Nasal obstruction</li>
              <li>Sinusitis</li>
              <li>Headache</li>
              <li>Migraine</li>
              <li>Tonsillitis and Adenitis</li>
              <li>Stomatitis (oral ulcers)</li>
              <li>Hard of hearing (Reduced Hearing)</li>
              <li>Otitis Externa and Media</li>
              <li>Herpes zoster oticus</li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <meta name="robots" content="max-image-preview:large" />
          <title>
            Shalakya Tantra Naiminath Ayurveda : Top BAMS College in India
          </title>
          <meta name="description" content="NA" />
        </head>
      ),
    },
    {
      title: "Shalya Tantra",
      content: (
        <>
          <p className="mt-2">
            Shalya Chikitsa is the branch of Ayurveda medicine that uses
            surgical techniques and traces its origin to the one of the first
            and most established treatise on Ayurveda, Susrata Samhita.
            Treatment includes ancient surgical procedures and clinical
            applications of various treatment modalities, successful treatment
            for Piles and Fistula as per Ayurvedic methodology, treatment of
            chronic diseases with blood-letting through Leeches and practical
            training of surgical procedures on patients at well-equipped
            operation theatre and procedure room.
          </p>
          <br />
          <p>
            At Naiminath Ayurvedic Hospital, surgical conditions comprehensively
            managed by Ayurvedic Special techniques are –
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>
                Long-standing non-healing wounds are best treated by herbal
                preparations like kashaya (decoction), kalka (herbal paste),
                etc.
              </li>
              <li>
                Fistula in ano cases are managed effectively by the technique
                called cryptoglandular surgery.
              </li>
              <li>
                Stones in the urinary tract are best managed by Ayurvedic
                formulations like Paniya Kshar (herbomineral preparations).
              </li>
              <li>
                There are special Ayurvedic techniques to minimize
                post-operative scars.
              </li>
              <li>
                Kshara Karma, which is unique of its type, treats many surgical
                ailments like Corns, Warts, Piles, Keloids, etc.
              </li>
              <li>
                Leech therapy is effectively used to treat non-healing wounds
                like venous ulcer, arterial ulcer, and post of wounds, etc.
              </li>
              <li>Agnikarma gives the best results in calcaneal spur, etc.</li>
              <li>
                Ksharasutra is one of the revolutionary treatment techniques
                that deal with Piles, complex Fistula in Ano successfully.
              </li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <meta name="robots" content="max-image-preview:large" />
          <title>
            Shalya Tantra Naiminath Ayurveda : Top BAMS College in India
          </title>
          <meta name="description" content="NA" />
        </head>
      ),
    },
    {
      title: "Swasthvritta",
      content: (
        <>
          <p className="mt-2">
            Swasthavritta evam Yog in Ayurveda offers proactive preventive
            healthcare and lifestyle management. The aim of ayurveda is to cure
            diseases and beyond that; to prevent the occurrence of diseases and
            ailments by means of adoption of right hygiene: personal and social.
            As such Swasthavritta evam Yog offers holistic personal and social
            hygiene habits to be incorporated into habits and lifestyle for the
            proactive prevention of ailments and diseases- communicable and
            non-communicable. The components of personal hygiene are dinacharya,
            rutacharya and trayopstambha. The components of social hygiene are
            water, light and air.
          </p>
          <br />
          <p>
            Ayurveda defines perfect health as the sum total of the effects of
            the balancing of Doshas like Vata, Pitta and Kapha, Dhatus like
            Rasa, Rakta, Mansa, Meda, Asthi, Majja, Shukra and Agni. To the
            extent of achieving a perfect health Ayurveda prescribes three parts
            of lifestyle namely:
          </p>
          <br />
          <div>
            <ul className="list-disc ml-8">
              <li>Dinacharya (diet and regimen for the daytime)</li>
              <li>Ratricharya (diet and regimen for the night time)</li>
              <li>
                Ritucharya ( seasonal diet and regimen) and Sandhikal ( diet
                instructions for the joint period of two seasons)
              </li>
            </ul>
          </div>
          <br />
        </>
      ),
      meta: (
        <head>
          <meta name="robots" content="max-image-preview:large" />
          <title>
            Swasthavritta Naiminath Ayurveda : Top BAMS College in India
          </title>
          <meta name="description" content="NA" />
        </head>
      ),
    },
    {
      title: "Abhyangam Treatment",
      content: (
          <Abhyangam />
      ),
      meta: (
        <head>
        <title>
          Abhyangam Treatment | Abhyangam Therapy - Naiminath Ayurveda
        </title>
        <meta
          name="description"
          content="Escape to a world of tranquility and healing with Abhyangam Treatment at Naiminath Ayurveda. Rediscover harmony within yourself today!"
        />

        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Abhyangam Treatment | Abhyangam Therapy - Naiminath Ayurveda"
        />
        <meta
          property="og:description"
          content="Escape to a world of tranquility and healing with Abhyangam Treatment at Naiminath Ayurveda. Rediscover harmony within yourself today!"
        />
        <meta
          property="og:url"
          content="https://naiminathayurveda.org/abhyangam/"
        />
        <meta
          property="og:site_name"
          content="Naiminath Ayurveda : Best Private BAMS College in Agra, UP, India"
        />
        <meta
          property="og:updated_time"
          content="2023-09-04T09:20:08+00:00"
        />
        <meta
          property="og:image"
          content="https://naiminathayurveda.org/wp-content/uploads/2023/09/20230904100943_fpdl.in_chinese-asian-woman-wellness-beauty-spa-having-aroma-therapy-massage-with-min.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://naiminathayurveda.org/wp-content/uploads/2023/09/20230904100943_fpdl.in_chinese-asian-woman-wellness-beauty-spa-having-aroma-therapy-massage-with-min.jpg"
        />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Abhyangam" />
        <meta property="og:image:type" content="image/jpeg" />
      </head>
      )
    },
    {
      title: "Shirodhara",
      content: (
        <>
          <SirodharaPage />
        </>
      ),
    },
    {
      title: "Kashayadhara Treatment: The Holistic Healing Experience",
      content: (
        <>
          <KashydharaPage />
        </>
      ),
    },
    {
      title: "Greeva Basti Treatment: Relieve Neck and Shoulder Discomfort",
      content: (
        <>
          <GreevaBastiPage />
        </>
      ),
    },
    {
      title: "Janu Basti Treatment: Soothe and Revitalize Your Knees",
      content: (
        <>
          <JanuBastiPage />
        </>
      ),
    },
    {
      title: "Kati Basti Treatment: Easing Your Way to a Pain-Free Back",
      content: (
        <>
          <KatiBastiPage />
        </>
      ),
    },
    {
      title: "Spine Basti: Holistic Healing for Your Backbone",
      content: (
        <>
          <SpineBastiPage />
        </>
      ),
    },
    {
      title: "Kizhi Treatment: A Healing Experience for Body and Soul ",
      content: (
        <>
          <KizhiPage />
        </>
      ),
    },
    {
      title: "Mukha Lepam: Revitalize Your Skin with Ayurvedic Care ",
      content: (
        <>
          <MukhaLepam />
        </>
      ),
    },
    {
      title: "Discover the Healing Benefits of Netra Tarpanam Treatment",
      content: (
        <>
          <NetraTarpanamPage />
        </>
      ),
    },
  ];

  const rounter = useRouter();

  const [itemsContent, setItemsContent] = useState(items[id]);
  const [currentId, setCurrentId] = useState(id);
  const { imageSlide, setImageSlide } = useGlobalContext();

  useEffect(() => {
   
    if (typeof id === "number") {
      console.log("Page loaded");
      setItemsContent(items[id]);
      setCurrentId(id);
      if (imageSlide) {
        setImageSlide(false);
      }
    }
  }, [id]);

  return (
    <>
    {itemsContent.meta && (
        <>{itemsContent.meta}</>
      )}
    <div className="flex flex-col items-center justify-center font-sans h-full w-full pb-16">
      <div
        className=" bg-[url('/images/aboutus_bg.jpg')] bg-cover h-[20vh] w-full flex items-center justify-center 
      text-[#54595f] md:text-[32px] text-[28px] text-center font-extrabold border-b-[0.009px] border-[#8b939465]"
      >
        {itemsContent.title}
      </div>
      <div className="flex md:flex-row flex-col w-full justify-center items-start md:mt-12">
        <div className=" flex flex-col basis-2/5 flex-none  gap-3 items-center justify-center ">
          <ul className="list-none list-inside text-[17px] ps-6 custom-list cursor-pointer font-serif mt-2">
            {items.slice(0, 7).map((item, index) => (
              <li
                key={index}
                className=" hover:text-[#54595f] text-[#50b9ce] "
                onClick={() => {
                  setCurrentId(index);
                  setItemsContent(item);
                 // rounter.push(`/hospPage/hospital/opd?id=${index}`)
                  
                 // console.log("idahjh===", index);
                  
                   const currentUrl = window.location.href;
                   const newUrl = `${currentUrl.split('?')[0]}?id=${index}`;
                   window.history.replaceState(null, '', newUrl);
                  // window.location.reload()

                }}
              >
                {item.title}
              </li>
            ))}
            <style jsx>{`
              /* Use the utility class to change the color of the list item bullets */
              .custom-list li::before {
                font-size: 20px;
                content: "•"; /* Use the desired bullet character */
                color: #54595f; /* Change this to the color you want for the bullets */
                margin-right: 8px; /* Adjust the spacing between the bullet and text */
              }
            `}</style>
          </ul>
        </div>
        <ShowRightSideText id={currentId} data={itemsContent} />
      </div>
    </div>
    </>
    
  );
};

const ShowRightSideText = ({ id, data }: any) => {
  return (
    <>
      {/* <div className=" flex flex-col gap-3 items-start justify-center mr-44">
          <h5 className="text-[#54595f] font-semibold">{data.title}</h5>
          <div className=" text-[#7f7f7f] text-[16px] text-justify font-medium font-serif">
            {data.content}
          </div>
        </div> */}
      {typeof id === "number" && id >= 0 && id <= 6 && (
        <div className=" flex flex-col gap-3 items-start justify-center md:mr-44 md:mx-0 mx-4 md:mt-0 mt-4 ">
          <h5 className="text-[#54595f] font-semibold">{data.title}</h5>
          <div className=" text-[#7f7f7f] text-[16px] md:text-justify font-medium font-serif">
            {data.content}
          </div>
        </div>
      )}

      {typeof id === "number" && id >= 7 && id <= 16 && (
        <div className=" flex flex-col items-start justify-center md:mr-44 md:mx-0 mx-4 md:mt-0 mt-4 font-serif">
          {data.content}
        </div>
      )}
    </>
  );
};

export default Hospital;
