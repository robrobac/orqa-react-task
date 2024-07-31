/* eslint-disable react/prop-types */
import CloseIcon from '../../../assets/icons/CloseIcon';
import Button from '../../Buttons/Button';
import './employeeDetails.scss';

export default function EmployeeDetails({data, modalFunction}) {

  return (
    <div className="employeeDetailsContainer">
        <div className="employeeDetails">
            <div className="closeButton">
                <Button variant="iconButton" action={() => modalFunction("close")}>
                    <CloseIcon />
                </Button>
            </div>
            <div className="detailsWrap">
                <div className="detailsHeader">
                    <img src={data.imageUrl} alt="" />

                    <div className="detailGroup">
                        <p className='nameDetail'>{data.firstName} {data.lastName}</p>
                        <p className='positionDetail'>{data.position}</p>
                    </div>
                </div>

                <div className="detailGroup">
                    <span className='detailLabel'>About</span>
                    <p className='aboutDetail'>{data.about}</p>
                </div>

                <div className="detailGroup">
                    <span className='detailLabel'>Address</span>
                    <p className='aboutDetail'>{data.adress}</p>
                </div>

                <div className="detailGroup">
                    <span className='detailLabel'>Email</span>
                    <p className='aboutDetail'>{data.email}</p>
                </div>

                <div className="detailGroup">
                    <span className='detailLabel'>Contact Number</span>
                    <p className='aboutDetail'>{data.contactNumber}</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}
