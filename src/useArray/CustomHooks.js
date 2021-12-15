import useArray from "./useArray"

export default function CustomHooks() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div className="matter" >
      <h1>Custom Hooks </h1>
      <div>{array.join(", ")}</div>
      <div style={{padding:'20px'}}>
      <button style={{background:'red', color:'white'}} onClick={() => push(7)}>Add 7</button>
      <button style={{background:'red', color:'white'}} onClick={() => update(1, 9)}>Change Second Element To 9</button>
      <button style={{background:'red', color:'white'}} onClick={() => remove(1)}>Remove Second Element</button>
      <button style={{background:'red', color:'white'}} onClick={() => filter(n => n < 3)}>
        Keep Numbers Less Than 4
      </button>
      <button style={{background:'red', color:'white'}} onClick={() => set([1, 2])}>Set To 1, 2</button>
      <button style={{background:'red', color:'white'}} onClick={clear}>Clear</button>
      
      </div>
    </div>
  )
}