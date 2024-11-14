import React, { useState } from 'react';

function Faq() {
    const [visibleAnswers, setVisibleAnswers] = useState({
        rule1: false,
        rule2: false,
        rule3: false,
        rule4: false,
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false
    });

    const toggleVisibility = (key) => {
        setVisibleAnswers(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <div id = "faq_and_rules" className='lg:flex'>
            <div className="lg:w-1/2 lg:ml-44">
                <p className="text-center font-extrabold text-4xl mt-20">FAQs</p>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule1')}>
                    <p className="text-lg font-semibold">What is our targeted problem statement? </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule1 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                       We are targeting Problem Statement ID 1736 from the Smart India Hackathon 2024. This problem focuses on developing an AI-based frame interpolation and video generation system for WMS services using satellite imagery. Our goal is to generate smooth visualizations of cloud movements by interpolating frames between discrete satellite images, which are captured every 30 minutes (half-hourly). This allows us to provide a continuous visualization of cloud dynamics without requiring continuous image data.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule2')}>
                    <p className="text-lg font-semibold">How do we generate multiple frames with only 2 given frames?                    </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule2 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                        We generate multiple frames between two given images by using a deep learning model called an autoencoder. The model encodes key features from the two input images, along with environmental factors like wind speed and direction, and uses this information to predict intermediate frames. This interpolation fills in the time gaps between the two images, providing smooth visualization without the need for continuous data.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule3')}>
                    <p className="text-lg font-semibold">How is our solution different/better from other pre-existing solutions? </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule3 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                        Our solution is superior to pre-existing models because it doesn’t rely solely on estimating cloud movement based on images. Instead, we incorporate real environmental factors such as wind speed, direction, pressure, and temperature. This allows for much more accurate cloud movement predictions, especially during extreme weather conditions where traditional models may fail.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('rule4')}>
                    <p className="text-lg font-semibold">Why isn't continuous data imagery available for moving objects?                    </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.rule4 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                        Continuous data imagery is limited due to the high cost and technical challenges associated with capturing high-resolution satellite images at frequent intervals. Collecting such data requires substantial resources, bandwidth, and storage capacity, which is not feasible for many satellites. Additionally, satellite orbits and coverage limitations contribute to the gaps between frames.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>
            </div>

            <div className="lg:w-1/2 lg:mr-44">
                <p className="text-center font-extrabold text-4xl mt-20">FAQ's</p>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq1')}>
                    <p className="text-lg font-semibold">What factors are we using to make the predictions accurate?                    </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq1 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                        To improve prediction accuracy, we integrate several key environmental factors: wind speed, wind direction, atmospheric pressure, and temperature. These variables allow our model to predict cloud movement and deformation much more accurately than models based solely on frame interpolation.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq2')}>
                    <p className="text-lg font-semibold">What is the future scope of the project?                    </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq2 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                        The future scope of the project includes expanding the system to predict more complex weather phenomena like cyclones or storm systems by incorporating additional environmental data. By utilizing advanced processing techniques, the system could also run efficiently on modern desktop or mobile devices with GPUs/NPUs, allowing real-time predictions. Additionally, since continuous data imagery will no longer be necessary, this will reduce the cost of data transfer, making it more practical for large-scale weather monitoring applications. The technology could also be adapted for other use cases, such as tracking ocean currents or wildfire spread.
                    </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq3')}>
                    <p className="text-lg font-semibold">Why did we choose this problem statement                    </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq3 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                        We chose this problem statement because it addresses a significant challenge in current satellite image analysis, particularly for weather forecasting and environmental monitoring. Accurate cloud movement predictions are critical for understanding weather patterns, and our solution enables smoother visualizations that can help scientists and decision-makers in forecasting and disaster management.
                        </p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>

                <div className="flex justify-between mx-10 mt-10 cursor-pointer" onClick={() => toggleVisibility('faq4')}>
                    <p className="text-lg font-semibold">Why is it NECESSARY to consider environmental factors?                    </p>
                    <button >
                        <svg className="w-6 h-6 text-gray-800 dark:text-white ml-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 10">
                            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                        </svg>
                    </button>
                </div>
                {visibleAnswers.faq4 && (
                    <p className="text-s font-SourceCodePro mx-10 mt-10 animate-dropdown">
                        Incorporating environmental factors like wind speed, direction, pressure, and temperature is crucial because cloud movement is driven by these forces. Without accounting for them, models would only be making guesses, which are often inaccurate, particularly during dynamic weather events like storms or cyclones. Using these factors ensures our predictions are based on real-world conditions, making them more reliable and effective.</p>
                )}
                <hr className="h-px my-8 bg-white border-0 mx-10"></hr>
            </div>
        </div>
    );
}

export default Faq;
