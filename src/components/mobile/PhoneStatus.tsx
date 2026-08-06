import { useMobileClock } from '../../hooks/useClock';
import { BatteryIcon, WifiIcon } from '../icons';

export function PhoneStatus() {
  const clock = useMobileClock();

  return (
    <div className="phone-status">
      <span>{clock}</span>
      <span className="right">
        <WifiIcon color="#fff" />
        <BatteryIcon color="#fff" />
      </span>
    </div>
  );
}
