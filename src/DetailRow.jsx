function DetailRow({ icon, title, value }) {
  return (
    <div className="row">
      { icon }
      <div>
        <p className="row-title">{ title }</p>
        <h3>{ value }</h3>
      </div>
    </div>
  )
}

export default DetailRow