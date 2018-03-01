({
    showMessage : function (component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "message": "Contact details updated"
        });
        toastEvent.fire();
    }
})