import React from 'react';
function Logout() {
    return (
        <>
            <div className="container">

                <div className="text-center">

                    <p>Are you sure you want to log-off?</p>
                    <div className="actionsBtns">
                        <form action="/logout" method="post">
                            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                            <input type="submit" className="btn btn-default btn-primary" data-dismiss="modal" value="Logout" />
                            <button className="btn btn-default" data-dismiss="modal">Cancel</button>
                        </form>
                    </div>
                </div>

            </div>


            <div className="modal" id="logoutModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"  aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4>Log Out <i className="fa fa-lock"></i></h4>
                        </div>
                        <div className="modal-body">
                            <p><i className="fa fa-question-circle"></i> Are you sure you want to log-off? <br /></p>
                            <div className="actionsBtns">
                                <form action="/logout" method="post">
                                    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                                    <input type="submit" className="btn btn-default btn-primary" data-dismiss="modal" value="Logout" />
                                    <button className="btn btn-default" data-dismiss="modal">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Logout