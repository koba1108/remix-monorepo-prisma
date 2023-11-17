import usePlacesAutocompleteService from 'react-google-autocomplete/lib/usePlacesAutocompleteService.js'


export default function GoogleAutocomplete() {
  const {default: useGooglePlace} = usePlacesAutocompleteService
  const {
    // placesService,
    placePredictions,
    getPlacePredictions,
    // isPlacePredictionsLoading
  } = useGooglePlace({
    apiKey: "",
    options: {
      input: "",
      componentRestrictions: {country: "jp"},
    },
  })


  return (
    <>
      <input
        placeholder="Debounce 500 ms"
        onChange={(evt: any) => {
          getPlacePredictions({input: evt.target.value});
        }}
        // loading={isPlacePredictionsLoading}
      />
      {placePredictions.map((item: any) => <div>{item}</div>)}
    </>
  )
}
