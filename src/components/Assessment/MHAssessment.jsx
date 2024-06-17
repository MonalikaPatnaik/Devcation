import React, { useState, useEffect } from "react"
import image_1 from "../../assets/image_1.avif";
import image_2 from "../../assets/image_2.avif";
import image_3 from "../../assets/image_3.avif";
import './MHAssessment.css'
const MHAssessment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <h1 className="heading">MENTAL HEALTH ASSESSMENTS</h1>
            <div className="content">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image_1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Y-BOCS</h5>
                        <p className="card-text"> The primary purpose of the Y-BOCS is to provide a standardized measure of OCD symptom severity. It assesses the frequency and intensity of obsessions (unwanted, intrusive thoughts) and compulsions experienced by the individual.</p>
                        <a href="https://pcl.psychiatry.uw.edu/wp-content/uploads/2021/12/YBOCS.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">Take the test</a>
                    </div>
                </div>
                <div className="card " style={{ width: "18rem" }}>
                    <img src={image_2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Wechsler Adult Intelligence Scale </h5>
                        <p className="card-text">The WAIS is used by psychologists and other professionals to assess intellectual functioning, identify cognitive strengths and weaknesses, and diagnose intellectual disabilities or cognitive impairments.</p>
                        <a href="https://wwiqtest.com/?gad_source=1&gclid=EAIaIQobChMI7sf3_uaNhgMVlFsPAh026AKoEAAYASAAEgK2b_D_BwE" target="_blank" rel="noreferrer" className="btn btn-primary" >Take the test</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image_3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Perceived Stress Scale</h5>
                        <p className="card-text">The PSS helps researchers and healthcare professionals understand how individuals perceive and respond to stressors, which can inform interventions to reduce stress and improve coping strategies.</p>
                        <a href="https://www.bemindfulonline.com/test-your-stress" target="_blank" rel="noreferrer" className="btn btn-primary" >Take the test</a>
                    </div>
                </div>
            </div>
        </>
    )
};
export default MHAssessment;