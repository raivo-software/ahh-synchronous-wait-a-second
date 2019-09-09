import React from 'react';
import { ReactComponent as TemperatureIconSvg } from './temperatureIcon.svg';

const temperatureIcon = (props) => {
  const temperature = isNaN(props.temperature) ? 0.5 : Math.max(0, Math.min(1, props.temperature));
  const styles = {
    height: "3rem",
    background: "rgb(" + (temperature * 255 + 100) + ",0," + (Math.abs(temperature - 1) * 255 + 100) + ")",
    borderRadius: "3rem"
  }
  return(
    <TemperatureIconSvg style={styles} />
  )
}

export default temperatureIcon;