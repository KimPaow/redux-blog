export const Search = (props) => {
  return (
    <>
      <form>
        <input
          placeholder="Search"
          onChange={(event) => props.callback(event.target.value)}
        />
      </form>
    </>
  )
}

export default Search