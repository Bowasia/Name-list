import { DSTextField } from "ttb-design-system-webview"
export default function SearchBar({ onChange }) {
    return (
        <DSTextField
            half
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search"

            tabIndex={4}
            variant="search"
        />

        // <input type="text" placeholder="Enter search term . . ." onChange={(e) => onChange(e.target.value)}/>
    )
}