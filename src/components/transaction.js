import * as React from 'react';


export default function Transaction() {
    return (
        <div id='recent_transaction' className='x-patten'>
            <div className='x-balance-header'>
                <div className='x-hd-title'>Recent transactions</div>
            </div>
            <div className='x-recent-body'>
                <div className='x-tbl-header'>
                    <div className='x-title'>DATE</div>
                    <div className='x-title'>TRADE AMOUNT</div>
                    <div className='x-title'>EARN AMOUNT</div>
                </div>
                <div className='x-tbl-body'>
                    {/* <div>DATE</div>
                    <div>TRADE AMOUNT</div>
                    <div>EARN AMOUNT</div> */}
                    <div className='x-tbl-none'>Transactions not found</div>
                </div>
            </div>
        </div>
    )
}