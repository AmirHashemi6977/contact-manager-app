import { useContext } from 'react';
import { ContactContext } from '../../contex/ContactContex';
import { PURPLE } from '../../helpers/colors';
const SearchContact = () => {
    const { contactQuery, contactSearch } = useContext(ContactContext);
    return (
        <div className="col">
            <div className="input-group group-mx2 w-75" dir="ltr">
                <span className='input-group-text' id="basic-addon1" style={{ color: PURPLE }}>
                    <i className="fas fa-search" />
                </span>
                <input
                    dir="rtl"
                    type="text"
                    value={contactQuery.text}
                    onChange={contactSearch}
                    aria-label="search"
                    aria-describedby="basic-addon1"
                    placeholder="جستجو مخاطبین"
                    className="form-control"
                >
                </input>
            </div>

        </div>
    )

}
export default SearchContact;