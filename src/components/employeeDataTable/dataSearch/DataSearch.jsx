/* eslint-disable react/prop-types */
import SearchIcon from '../../../assets/icons/SearchIcon'
import Button from '../../Buttons/Button'
import './dataSearch.scss'

export default function DataSearch({search, handleSearch}) {
    return (
        <div className="employeeDataTableSearchContainer">
            <div className="searchWrap">
                <div className="searchBar">
                    <label htmlFor="searchInput"><SearchIcon /></label>
                    <input id='searchInput' type="search" placeholder='Search for Employee' value={search} onChange={handleSearch} />
                </div>
                <Button variant="exportButton" />
            </div>
            
        </div>
    )
}
