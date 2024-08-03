import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import Svg from "./Svg";

export default function Header() {
    return (
        <>
            <Svg />
            <DesktopHeader />
            <MobileHeader />
        </>
    )
}
