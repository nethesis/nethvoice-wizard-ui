Name: nethvoice-wizard-ui
Version: 14.12.0
Release: 1%{?dist}
Summary: UI for NethVoice
Group: Network
License: GPLv2
Source0: %{name}-%{version}.tar.gz
BuildRequires: nethserver-devtools
BuildRequires: nodejs npm git http-parser
Buildarch: noarch
Requires: nethserver-freepbx

%description
NethVoice UI

%prep
%setup


%build
perl createlinks

# Wizard UI
(cd wizard && npm install yarn && node_modules/yarn/bin/yarn install && node_modules/grunt-cli/bin/grunt build)
mkdir -p root/var/www/html/freepbx/wizard
cp -r wizard/dist/* root/var/www/html/freepbx/wizard/


%install
rm -rf %{buildroot}
(cd root; find . -depth -print | cpio -dump %{buildroot})

%{genfilelist} %{buildroot} \
> %{name}-%{version}-filelist


%clean
rm -rf %{buildroot}

%files -f %{name}-%{version}-filelist
%defattr(-,root,root,-)
%dir %{_nseventsdir}/%{name}-update
%doc

%changelog
* Thu Sep 16 2021 Sebastian <sebastian.besel@nethesis.it> - 14.12.0-1
- Default registration value for unmonitored trunks is wrong - Bug nethesis/dev#6049
- Change the CTI profile instead of the context in multiple extension management - Bug nethesis/dev#6041
- Add feedback for failed requests in permissions - Bug nethesis/dev#6037
- Enhance voip trunks patch operations - nethesis/dev#6028
- Add trunks's registration to dashboard and voip trunks sections   - nethesis/dev#6029

* Fri Jun 18 2021 Sebastian <sebastian.besel@nethesis.it> - 14.11.0-1
- Lack of explanation if the added physical phone is encrypted - Bug nethesis/dev#6003 !! INCOMPLETE
- Create VoIP trunks using pjsip instead of chan_sip - nethesis/dev#6002
- Nethvoice:  added destination column description - nethesis/dev#6001
- Wizard: add an option to open parameterized URL only for incoming calls through queues - nethesis/dev#5928
- Point users provider configuration link to the section on Cockpit - nethesis/dev#6014
- Lack of translations inside the wizard - Bug nethesis/dev#6006
- Add NethPhone to NethVoice provisioning - nethesis/dev#5956 !! INCOMPLETE
- Add CDR admin and group CDR permissions to reports - nethesis/dev#5991

* Thu Apr 22 2021 Stefano Fancello <stefano.fancello@nethesis.it> - 14.10.0-1
- Jitsi instant video conference integration - nethesis/dev#5966
- Add Videoconference URL management - nethesis/dev#5993
- Add NethPhone to NethVoice provisioning - nethesis/dev#5956
- Enhace Voip Trunks management section - nethesis/dev#5982
- Fix all missed translation on NethVoice Wizard Profile section - Bug nethesis/dev#5974

* Tue Jan 26 2021 Stefano Fancello <stefano.fancello@nethesis.it> - 14.9.0-1
- Show devices created by migration from old version - Bug nethesis/dev#5915
- Add to Wizard the management of sources to be included in the Nethvoice Phonebook - nethesis/dev#5941
- Selects not correctly rendered in exp keys types during model editing - Bug nethesis/dev#5921
- NethVoice wizard ui and rest SecretKey templates aren't expanded on box - Bug nethesis/dev#5932

* Fri Nov 27 2020 Davide Principi <davide.principi@nethesis.it> - 14.6.0-1
- Phonebook CSV sources - nethesis/dev#5903
- Missing destinations in bulk extensions - nethesis/dev#5875

* Fri Sep 18 2020 Davide Principi <davide.principi@nethesis.it> - 14.5.2-1
- Models page shows a partial list - Bug nethesis/dev#5872
- Users list not correctly filtered in configurations - Bug nethesis/dev#5852

* Fri Jul 17 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.5.1-1
- Add IP to phone informations in configurations  - nethesis/dev#5846

* Mon Jul 06 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.5.0-1
- Retrieve vendor MACs from Tancredi API - nethesis/dev#5839
- Provisioning minor fixes - nethesis/dev#5838
- Fix missing Italian Codecs translation
- Change provisioning inputs columns behaviour
- Fix the warning on changed values in phone settings
- Add info to phones in configurations
- Enhance warning labels in settings
- Enhance actions labels and warnings in models

* Tue Jun 23 2020 SebastianMB-IT <sebastian.besel@nethesis.it> - 14.4.10-1
- Add users dynamic search in keys - nethesis/dev#5835
- Add translations for dss_transfer and time_format (#116)
- Fix Expansion keys labels (#115)

* Wed Jun 17 2020 SebastianMB-IT <sebastian.besel@nethesis.it> - 14.4.9-1
- Phone display and ringtone settings - nethesis/dev#5812
- Fix variables values on ldap phonebook custom type select - nethesis/dev#5822
- Add warning message on NAT settings save - nethesis/dev#5822
- Show default settings button in models if models list is empty - nethesis/dev#5822
- Enhance custom model display name on creation - nethesis/dev#5822

* Tue Jun 09 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.8-1
- Tancredi admin password not used when creating a physicalextension - Bug nethesis/dev#5818
- Provisioning ui enhancements - nethesis/dev#5822
- Add Asterisk restart message on nat settings save
- Show default settings when no models are shown
- Change custom phonebook behaviour

* Wed Jun 03 2020 SebastianMB-IT <sebastian.besel@nethesis.it> - 14.4.7-1
- VLAN static configurations for phones provisioning - nethesis/dev#5795
- Firmware management in models and single phone - nethesis/dev#5800
- Improve management of parameterized URL - nethesis/dev#5803

* Wed May 13 2020 SebastianMB-IT <sebastian.besel@nethesis.it> - 14.4.6-1
- Add encryption switch for custom devices in provisioning - nethesis/dev#5799
- Fix the first configuration defaults management error - Bug nethesis/dev#5798

* Thu May 07 2020 SebastianMB-IT <sebastian.besel@nethesis.it> - 14.4.5-1
- Enable the edit form on single phone - nethesis/dev#5786
- Models list alphabetically ordered - Bug nethesis/dev#5790
- Deny the creation of modules with same names - Bug nethesis/dev#5789
- Space in custom module breaks the Modules view - Bug nethesis/dev#5784
- All default variables are copied to model scope on model variables save - Bug nethesis/dev#5787

* Wed May 06 2020 Davide Principi <davide.principi@nethesis.it> - 14.4.4-1
- Models list alphabetically ordered - Bug nethesis/dev#5790
- Deny the creation of modules with same names - Bug nethesis/dev#5789
- Space in custom module breaks the Modules view - Bug nethesis/dev#5784
- All default variables are copied to model scope on model variables save - Bug nethesis/dev#5787

* Thu Apr 30 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.3-1
- Feedback of failed RPS insertion - nethesis/dev#5785
- Wizard: improve info about line keys settings for admin - nethesis/dev#5783
- Allow to enable/disable ldap phonebook from wizard - nethesis/dev#5766
- "Copy Url" button does not work into the wizard devices -> phones page - Bug nethesis/dev#5779
- Add queuetoggle configuration for linekeys of physical phones - nethesis/dev#5778

* Thu Apr 16 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.2-1
- Allow or deny access to SIPS and RTP port from red interfaces - nethesis/dev#5763
- Configure NAT settings - nethesis/dev#5772
- Restore mobile number management functions (#86)

* Wed Apr 01 2020 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.1-1
- Hide phone buttons permission if provisioning engine is freepbx
- Add exception in ldap_server placeholder
- Reduce timeout before association success message
- New LDAP phonebook labels and i18n fixes (#82)
- Add enable mobile app button
- Fix ui build and dependencies (#81)
- New provisioning UI

* Mon Jul 15 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.4.0-1
- Fix the deletion of routes containing symbols nethesis/dev#5674
- Fix physical trunks configuration download nethesis/dev#5678

* Tue Jul 02 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.3.2-1
- Fix extens colors into the wizard dashboard (#57) nethesis/dev#5659

* Fri Apr 05 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.3.1-1
- Call /logout API on logout nethesis/dev#5598

* Tue Mar 26 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.3.0-1
- Add phonebook sources page nethesis/dev#5557

* Tue Mar 12 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.2.2-1
- Fix page names overflow on expanded collapse nethesis/dev#5582
- Fix dashboard not found messages nethesis/dev#5582
- Fix spinner behaviour on route change
- Remove wizard steps if is not wizard nethesis/dev#5582

* Fri Feb 08 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.2.1-1
- Fix brand logo for rebranding Nethesis/dev#5574
- Enhance all search filtering on objects Nethesis/dev#5572
- Allow only one queue turned on in Operator Panel permissions Nethesis/dev#5549

* Fri Jan 11 2019 Stefano Fancello <stefano.fancello@nethesis.it> - 14.2.0-1
- Add dashboard wizard nethesis/dev#5544
- Add migration from NethVoice 11 to 14 nethesis/dev#5454

* Mon Nov 12 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.6-1
- Fix bulk extension outcid nethesis/dev#5493
- Better user and device UI nethesis/dev#5493

* Thu Oct 04 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.5-1
- Fix gateway configuration download on trunks nethesis/dev#5472
- Add order to users list in configuration nethesis/dev#5430

* Fri Jul 27 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.4-1
- Add order to users list in configuration nethesis/dev#5430
- Queue manager permission translation

* Wed Jun 06 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.3-1
- Add mac addr to gateway configuration push
- Add Outbound CID to bulk extensions nethesis/dev#5402
- Add parameterized URLs nethesis/dev#5412
- Csv add export button and show buttons even in unified communication mode nethesis/dev#5401

* Wed May 16 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.2-1
- Remove unused "remote sites" permission nethesis/dev#5397
- Adjust extensions configuration filter layout
- Fix users configuration content layout

* Wed Apr 18 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.1-1
- Set outbound routes as browser language if not selected nethesis/dev#5381
- Change dashboard titles style nethesis/dev#5380
- Fix mobile nethvoice logo height nethesis/dev#5380
- Update css nethesis/dev#5380

* Mon Apr 16 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.1.0-1
- Add wizard page for bulk operations nethesis/dev#5365
- Wizard add import from csv file nethesis/dev#5371

* Fri Mar 16 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.0.1-1
- Fix default selected codec in voip trunks nethesis/dev#5356
- Block next step if there aren't extensions nethesis/dev#5356
- Fix switch visualization nethesis/dev#5346
- make navbar numbers dinamic nethesis/dev#5347

* Fri Feb 23 2018 Stefano Fancello <stefano.fancello@nethesis.it> - 14.0.0-1
- Created nethvoice-wizard-ui RPM instead of embed it into nethserver-nethvoice14. Nethesis/dev#5341
- Enhance language section and fix page loaders. Nethesis/dev#5340
- Usability minor fixes. Nethesis/dev#5325

