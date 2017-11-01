import * as React from 'react';

export default () =>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div>
                    Need a gift idea? Gift certificates from Chef Laura are the perfect solution! Consider purchasing one for:
                </div>
                <ul>
                    <li><i className="fa fa-leaf"></i> A Christmas gift</li>
                    <li><i className="fa fa-leaf"></i> A get well gift</li>
                    <li><i className="fa fa-leaf"></i> Baby showers</li>
                    <li><i className="fa fa-leaf"></i> Birthdays</li>
                    <li><i className="fa fa-leaf"></i> Other special occassions</li>
                </ul>
                <div>Gift Certificate Purchase Form</div>
                <div>
                    <form>
                        <div>From</div>
                        <div>
                            <div><input type="text" name="FirstName" /></div>
                        </div>
                        <div>
                            <div><input type="text" name="MiddleInitial" /></div>
                        </div>
                        <div>
                            <div><input type="text" name="LastName" /></div>
                        </div>
                        <div>
                            <div><input type="text" name="Address1" /></div>
                        </div>
                        <div>
                            <div><input type="text" name="Address2" /></div>
                        </div>
                        <div>
                            <div><input type="text" name="City" /></div>
                        </div>
                        <div>
                            <div><input type="text" name="State" /></div>
                        </div>
                        <div>
                            <div><input type="text" name="ZipCode" /></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>