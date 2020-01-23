# Models configuration

Every phone model is configurable by a set of variables.
This set of variables is generally different among various models and brands.
Tancredi templates strive to uniform as much as possible the variable names used by the models supported by Nethesis.
For instance, every template should use the same variable names to configure soft keys, expansion keys, display, ringtone and so on.

## UI organization

Configuration variables are grouped by feature.
Declaring that a phone model supports a certain feature means that the model supports all the variables related to that feature.
The features that have been defined are the following:

- `softKeys`
- `lineKeys`
- `expansionKeys`
- `settings`
- `password`
- `ringtone`
- `display`
- `wallpaper`
- `screensaver`
- `ldap`
- `vlan`
- `provisioning`

Some examples of variables related to features:

- `softKeys`
  - `softkey_type`
  - `softkey_label`
  - `...`
- `lineKeys`
  - `linekey_type`
  - `linekey_line`
  - `...`
- `expansionKeys`
  - `expkey_type`
  - `expkey_line`
  - `...`
- `settings`
  - `language`
  - `network_time_server`
  - `...`
- `password`
  - `adminpw`
  - `userpw`
  - `...`
- `ringtone`
  - `default_ringtone`
  - `ringtone_url`
- `display`
  - `lcd_logo_mode`
  - `contrast`
  - `...`
- `wallpaper`
  - `wallpaper`
  - `wallpaperurl`
- `screensaver`
  - `screensaver_mode`
  - `screensaver_wait_time`
  - `...`
- `ldap`
  - `ldap_base`
  - `ldap_port`
  - `...`
- `vlan`
  - `vlan_dhcp_enable`
  - `data_vlan_qos`
  - `...`
- `provisioning`
  - `dhcp_enable`
  - `weekly_enable`
  - `...`
  
The UI for the configuration of every model is organized in the following sections:

- `Soft Keys`
- `Line Keys`
- `Expansion Keys`
- `General`
- `Preferences`
- `Network`
- `Provisioning`

Every section contains the UI widgets for the configuration of the variables related to the features of that section.
Sections and related features are the following:

- `Soft Keys`
  - `softKeys`
- `Line Keys`
  - `lineKeys`
- `Expansion Keys`
  - `expansionKeys`
- `General`
  - `settings`
  - `password`
- `Preferences`
  - `ringtone`
  - `display`
  - `wallpaper`
  - `screensaver`
- `Network`
  - `ldap`
  - `vlan`
- `Provisioning`
  - `provisioning`

If a model doesn't support any feature related to a specific section, that section is not shown on the UI.
For instance, if a model doesn't support expansion keys, then `Expansion Keys` shouldn't be shown.
Another example: if a model does not support neither LDAP nor VLAN, then `Network` section should not be shown.

## Model configuration UI development

In order to show in `Models` page the appropriate sections and variables for each phone model, some files need to be coded in `nethvoice-wizard-ui`:

- `fanvilservice.js`
- `gigasetservice.js`
- `sangomaservice.js`
- `snomservice.js`
- `yealinkservice.js`

Each of these files defines the models of the brand with the same name supported by Nethesis, the features supported by every model and the description of the variables related to the various features.

There are some requirements to code the file of a specific brand:

- to know the exact name of every supported model; it must match a Tancredi scope file name and must be written uppercase. See the directory listing of `/usr/share/tancredi/data/scopes` as a reference
- to know which features are supported by every model
- to know the name, the type and the allowed values of every variable related to every supported feature. This information can be derived from the related Tancredi template and from the phone datasheet

It is worth considering that the UI should allow the configuration of an appropriate subset of the supported variables, not all of them.

### Example: Yealink

Yealink models configuration UI is provided by `wizard/app/scripts/services/provisioning/models/yealinkservice.js`.
This file provides a `map` function that defines:

- the list of the models supported (`T19P_E2`, `T21P_E2`, `T23G`, ...)
- the features supported by the various models (`"vlan": true, "wallpaper": true, "expansionKeys": ...`)
- a list of variables that should NOT be show in some models (`"hiddenVariables": ["softkey_label_5", "softkey_label_6", ...]`)

The `yealinkservice.js` then provides one function for every section to show on the UI.
For instance, `preferences()` function defines the feature related to the section (`ringtone`, `display`, `wallpaper`, `screensaver`) as well as the name, the type and the allowed values of every variable related to the various features.
Each variable name must match one of the variable names defined in the related Tancredi template, whereas the list of allowed values that a variable can store can be derived from:

- the phone datasheet
- a Tancredi macro. By now these macro define the allowed values for `language`, `timezone` and `tonezone` variables

A variable type can be one of the following:

- `input`: any text string (e.g. `ldap_server` variable)
- `list`: the variable can store one of the values defined by the `options` attribute (e.g. `default_ringtone` variable)
- `password`: the current value of the variable should be hidden by default (e.g. `ldap_password` variable)

