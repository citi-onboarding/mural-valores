import React from 'react';
import styled from 'styled-components';

const CurveWrapper = styled.div``;

const InitialSvg = styled.svg`
    path {
        fill:#6800e4;
    }
`;

const FinalSvg = styled.svg`
    path {
        fill:#51e678;
    }
`;

const SvgWrapper = styled.svg``;

function ValueCurve() {
  return (
    <CurveWrapper>
        <InitialSvg xmlns="http://www.w3.org/2000/svg" width="182.18" height="101.816" viewBox="0 0 182.18 101.816"><defs></defs><path class="a" d="M75.423,7.28c32.563,13.2,78.287-19.2,96.43-2.239S170.729,73.405,143.731,90.2s-46.855-9.962-79.87-17.99C46.1,67.887,6.306,64.818.372,44.962-4.68,28.059,42.86-5.918,75.423,7.28Z" transform="matrix(-0.999, 0.035, -0.035, -0.999, 182.18, 95.571)"/></InitialSvg>
        <FinalSvg xmlns="http://www.w3.org/2000/svg" width="153.555" height="79.908" viewBox="0 0 153.555 79.908"><defs></defs><path class="a" d="M54.927-11.113c31.924,12.939,67.592-1.075,67.592,23.389,0,8.288-43.76,39-78.413,44.125s-75.142-4.715-75.142-29.179c0-14.8,11.342-38.11,29.288-46.184C9.859-24.185,23-24.052,54.927-11.113Z" transform="translate(31.036 22.188)"/></FinalSvg>
        <SvgWrapper viewbox="0 0 400 400">
            <path 
                fill="#51e678">

                <animate attributeName="d" 
                    dur="6s"
                    repeatCount="indefinite"
                    values="
                        M75.423,7.28c32.563,13.2,78.287-19.2,96.43-2.239S170.729,73.405,143.731,90.2s-46.855-9.962-79.87-17.99C46.1,67.887,6.306,64.818.372,44.962-4.68,28.059,42.86-5.918,75.423,7.28Z;

                        M84.83,63.78c-33.41,8.34-50.28,11.31-69-5s-21-38-6-53c12.5-12.5,41.74-1.86,75,5,34,7,64.46-12.23,71.08,7.4C161.55,34.89,128.42,52.12,84.83,63.78Z;

                        M75.423,7.28c32.563,13.2,78.287-19.2,96.43-2.239S170.729,73.405,143.731,90.2s-46.855-9.962-79.87-17.99C46.1,67.887,6.306,64.818.372,44.962-4.68,28.059,42.86-5.918,75.423,7.28Z
                    "
                />

                <animate 
                    attributeName="fill"
                    dur="4s" 
                    repeatCount="indefinite"
                    values="#51e678;
                            #6800e4;
                            #51e678"
                />
            </path>
        </SvgWrapper>
    </CurveWrapper>
  );
}

export default ValueCurve;
