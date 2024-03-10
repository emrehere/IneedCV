"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { useInfo } from "@/app/store/contextApi"


export default function CheckboxWithText() {

  const { checked, setChecked } = useInfo();

    const check = () => {
        setChecked(!checked)   
       
    }

    console.log("checked", checked)

  return (
    <div className="items-top flex space-x-2 tracking-widest">
      <Checkbox onClick={check} id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Please confirm that you are a human
        </label>
        <p className="text-lg text-muted-foreground">
          Just a safety check to make sure you're not a bot
        </p>
      </div>
    </div>
  )
}
