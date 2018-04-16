export default `<%@ Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version={{ version }}.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version={{ version }}.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
{{#if hasWebPartZones}}<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version={{ version }}.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
{{/if}}
{{#ifCond hasPageContent '||' hasEditModePanel}}<%@ Register Tagprefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version={{ version }}.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
{{/ifCond}}

{{#if hasPageTitle}}
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
  <SharePoint:FieldValue FieldName="Title" runat="server"/>
</asp:Content>

<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
  <SharePoint:FieldValue FieldName="Title" runat="server"/>
</asp:Content>

{{/if}}
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

{{#if hasPageContent}}
  <div class="page-content">
    <Publishing:RichHtmlField FieldName="PublishingPageContent" HasInitialFocus="false" MinimumEditHeight="100px" runat="server"/>
  </div>

{{/if}}
{{#if hasWebPartZones}}
  <div class="web-parts">
    <WebPartPages:WebPartZone id="Zone1" runat="server" title="Zone 1"/>
    <WebPartPages:WebPartZone id="Zone2" runat="server" title="Zone 2"/>
  </div>

{{/if}}
{{#if hasEditModePanel}}
  <Publishing:EditModePanel CssClass="page-settings" runat="server">
    <SharePoint:TextField FieldName="Title" InputFieldLabel="Page Title" runat="server"/>
    <SharePoint:TextField FieldName="Name" InputFieldLabel="File Name" runat="server"/>
  </Publishing:EditModePanel>

{{/if}}
</asp:Content>`;
