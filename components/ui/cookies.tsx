import Icon from "$store/components/ui/Icon.tsx";

export interface Link {
  label: string
  href: string
  icon: boolean
}

export interface Props {
  cookiePolicyLink?: Link
}

export default function CookieConsent({cookiePolicyLink}: Props) {
  cookiePolicyLink = {
    label: "Read our cookie policy",
    href: "https://fashion.deco.site",
    icon: true
  }

  return (
    <div 
      className="modal modal-open mx-auto h-[140px] "
    >
      <div className="modal-box px-6 py-[26px] flex justify-between rounded-none w-10/12 rounded">
        <div className="flex flex-col w-max[478px] gap-2">
          <span className="text-xl text-[#161616]">Cookie policy</span>
          <p className="text-base text-[#161616]">We use third-party cookies order to personalize your expirience</p>
          <a 
            href={cookiePolicyLink?.href}
            className="flex align-center underline "
          >{cookiePolicyLink?.label}
           { cookiePolicyLink.icon ?? <Icon id="ChevronRight" size={20} strokeWidth={0.8}  />}
          </a>
        </div>
        <div className="flex flex-col w-[80px] justify-end">
          <Icon id="XMark" size={20} strokeWidth={1} className="ml-[60px] mb-[50px]"/>
          <div className="w-full">
            <div className="btn bg-[#273746] h-9">Allow</div> 
          </div>
        </div>
      </div>
    </div>
  )
}