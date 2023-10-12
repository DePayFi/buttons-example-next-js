import DePayButtons from "@depay/buttons"

export default function DePayWidgetsButton(props) {

  return(
    <DePayButtons.DePayButton
      integration={ props.integration }
      payload={ props.payload }
      blockchains={ props.blockchains }
    />
  )
}
