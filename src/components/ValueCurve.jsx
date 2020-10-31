import React from 'react';
import styled from 'styled-components';

const CurveWrapper = styled.div``;

const SvgWrapper = styled.svg``;

function ValueCurve() {
  return (
    <CurveWrapper>
        <SvgWrapper>
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
              
              <animate attributeName="points" 
                    dur="3s"
                    repeatCount="indefinite"
                    values="
                        M75.423,7.28c32.563,13.2,78.287-19.2,96.43-2.239S170.729,73.405,143.731,90.2s-46.855-9.962-79.87-17.99C46.1,67.887,6.306,64.818.372,44.962-4.68,28.059,42.86-5.918,75.423,7.28Z;

                        M84.83,63.78c-33.41,8.34-50.28,11.31-69-5s-21-38-6-53c12.5-12.5,41.74-1.86,75,5,34,7,64.46-12.23,71.08,7.4C161.55,34.89,128.42,52.12,84.83,63.78Z 4.68,28.059,42.86-5.918,75.423,7.28Z
                    "
                />
            </path>
        </SvgWrapper>
    </CurveWrapper>
  );
}

export default ValueCurve;
