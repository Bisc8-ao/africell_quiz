import React, { useEffect, useImperativeHandle, useRef, useState, forwardRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  background-color: transparet;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: ${({ color }) => color};
  width: ${({ percentage }) => percentage}%;
  transition: width 1s linear, background-color 1s linear;
`;

const Time = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const HorizontalTimer = forwardRef(({ duration, onComplete }, ref) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    startTimer() {
      clearInterval(intervalRef.current);
      setTimeLeft(duration);
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(intervalRef.current);
            onComplete();
            return 0;
          }
        });
      }, 1000);
    },
    stopTimer() {
      clearInterval(intervalRef.current);
    }
  }));

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const percentageLeft = (timeLeft / duration) * 100;
  const color = percentageLeft <= 25 ? 'red' : percentageLeft <= 50 ? 'orange' : 'green';

  return (
    <Container>
      <ProgressBar color={color} percentage={percentageLeft} />
    </Container>
  );
});

export default HorizontalTimer;
