export const fetchDisastersRequest = () => ({
  type: "FETCH_DISASTERS_REQUEST",
})

export const fetchDisastersSuccess = (disasters) => ({
  type: "FETCH_DISASTERS_SUCCESS",
  payload: disasters,
})

export const fetchDisastersFailure = (error) => ({
  type: "FETCH_DISASTERS_FAILURE",
  payload: error,
})

export const fetchDisasters = async (dispatch) => {
  dispatch(fetchDisastersRequest())
  try {
    const response = await fetch("http://localhost:5000/api/disasters/")
    if (!response.ok) {
      throw new Error("Failed to fetch disasters")
    }
    const data = await response.json()
    dispatch(fetchDisastersSuccess(data))
  } catch (error) {
    dispatch(fetchDisastersFailure(error.message || "An unknown error occurred"))
  }
}

